import {
   AsyncStorage,
   CameraRoll
} from 'react-native';
import PersonStore from '../store/PersonStore';
import FamilyTree from '../services/FamilyTree';
import { STORAGE_DATA_KEY } from '../common/Storage';

function updateData(token, successCallback, errorCallback) {
    FamilyTree.fetchLatestJSON(token)
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.map((element) => {
                if (element.avatar) {
                    const existingPersonData = PersonStore.people[element.name];
                    if (!existingPersonData || !existingPersonData.avatar || existingPersonData.avatar.sha !== element.avatar.sha || !existingPersonData.avatar.url) {
                       return new Promise((resolve, reject) => {
                           FamilyTree.fetchImageFile(token, element.avatar.file)
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
                                el.avatar.tempPath = undefined;
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
            AsyncStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(completedElements), () => {
                PersonStore.updatePeople(completedElements);
                successCallback();
            });
        })
        .catch((err) => {
            errorCallback();
        });
}

function deleteData(successCallback) {
    AsyncStorage.removeItem(STORAGE_DATA_KEY).then((response) => {
        PersonStore.clear();
        successCallback();
    });
}

export {updateData, deleteData};