import RNFetchBlob from 'react-native-fetch-blob';

const APP_URL = 'https://family-tree-server.herokuapp.com/';
const IMAGE_EXTENSION = 'jpg';

class FamilyTree {

    fetchLatestJSON(token) {
        return RNFetchBlob.fetch('GET', APP_URL, {
            'api_token': token,
            'Cache-Control': 'no-cache'
        });
    }

    fetchImageFile(token, fileName) {
        return RNFetchBlob.config(
            {
                fileCache : true,
                appendExt : IMAGE_EXTENSION
            }).fetch('GET', `${APP_URL}/avatars?name=${fileName}`, {
                'api_token': token,
                'Cache-Control': 'no-cache'
            });
        }

}

export default new FamilyTree();