import {
   AsyncStorage,
   CameraRoll
} from 'react-native';
import PersonStore from '../store/PersonStore';
import { NavigationActions } from 'react-navigation';
import RNFetchBlob from 'react-native-fetch-blob'

function updateData(navigation, token, successCallback, errorCallback) {
    RNFetchBlob.fetch('GET', 'https://family-tree-server.herokuapp.com/', {
          'api_token': token,
          'Cache-Control': 'no-cache'
    })
    .then((response) => {
       return response.json()
    })
    .then((responseJson) => {
        return responseJson.map((element) => {
           if (element.avatar) {
               const existingPersonData = PersonStore.people[element.name];
               if (!existingPersonData || !existingPersonData.avatar || existingPersonData.avatar.sha !== element.avatar.sha || !existingPersonData.avatar.url) {
                   return new Promise((resolve, reject) => {
                        RNFetchBlob
                          .config({
                             fileCache : true,
                             appendExt : 'jpg'
                          })
                          .fetch('GET', 'https://family-tree-server.herokuapp.com/avatars?name=' + element.avatar.file, {
                              'api_token': token,
                              'Cache-Control': 'no-cache'
                          })
                          .then((response) => {
                              element.avatar.tempPath = response.path();
                              resolve(element);
                          })
                          .catch((error) => {
                              reject(error);
                          });
                   });
           } else {
               return {...element, avatar: existingPersonData.avatar};
           }
           }
        });
    })
    .then((elements) => Promise.all(elements))
    .then((localElements) => {
       return localElements.map((el) => {
           return new Promise((resolve, reject) => {
               if (el.avatar.tempPath){
                   CameraRoll.saveToCameraRoll(el.avatar.tempPath)
                   .then((localUri) => {
                       el.avatar.url = localUri;
                       resolve(el);
                   })
                   .catch((error) => {
                       reject(error);
                   });
               } else {
                 resolve(el);
               }
           });
       })
    })
    .then((allPromises) => Promise.all(allPromises))
    .then((completedElements) => {
      AsyncStorage.setItem('peopleData', JSON.stringify(completedElements), () => {
            PersonStore.updatePeople(completedElements);
            successCallback();
            const resetAction = NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home'})
              ]
            });
            navigation.dispatch(resetAction);
      });
    })
    .catch((err) => {
        errorCallback();
    });
}

export {updateData};