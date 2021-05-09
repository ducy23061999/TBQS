import AsyncStorage from '@react-native-community/async-storage'
import {Key} from './Constants'

export default Storage = {
    setToken: async (token) => {
        const status = await AsyncStorage.setItem(Key.STORE.TOKEN, token)
        return status;
    },
    getToken: async () => {
        try {
            const token = await AsyncStorage.getItem(Key.STORE.TOKEN);
            return token;
        } catch(error) {
            return '';
        }
    },
    
}