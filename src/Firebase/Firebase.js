import createFBAuth from "@react-native-firebase/auth";
import database from '@react-native-firebase/database';
import moment from 'moment';

import { convertedData } from "./ConvertedData";


const auth = createFBAuth();
const timeFormatWithMS = "HH:mm:ss";
const dateFormat = "DD/MM/YYYY";

export const signUp = async (email, password) => {
    console.log('in signUp function')
    return await auth.createUserWithEmailAndPassword(email, password);
};
export const signIn = async (email, password) => {
    console.log('in signIn function')
    return await auth.signInWithEmailAndPassword(email, password);
}
export const signOut = async () => {
    return await auth.signOut();
}


export const sendMessage = async (uid, { name, message }) => {
    const newReference = database().ref(`/users/${uid}`).push();
    let now = moment();


    newReference
        .set({
            to: name,
            message: message,
            time: now.format(timeFormatWithMS),
            date:now.format(dateFormat)
        })
        .then(() => console.log('Data set.'));
}
export const getCurrentUser = () => {
    return auth.currentUser;
}

export const getMessages = (onDataRetrieved) => {
    const userId = getCurrentUser().uid;

    database()
        .ref(`/users/${userId}`)
        .on('value', snapshot => {
            const rawData = snapshot.val();
            const convertedList = convertedData(rawData);
            onDataRetrieved(convertedList);
        });

    return () => {
        database()
            .ref(`/users/${userId}`)
            .off('value');
    }
}

