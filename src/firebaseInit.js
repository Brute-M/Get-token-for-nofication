import firebase from "firebase/app";
import "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCkj2KP3Dtaf_HOC_jSyaoVIQVTRgFqn2I",
    authDomain: "write-way-8eb44.firebaseapp.com",
    projectId: "write-way-8eb44",
    storageBucket: "write-way-8eb44.appspot.com",
    messagingSenderId: "694874347047",
    appId: "1:694874347047:web:110490d0da36e7008c2002",
    measurementId: "G-PYCL8R9BRE"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

const { REACT_APP_VAPID_KEY } = process.env;
const publicKey = REACT_APP_VAPID_KEY;

export const getToken = async (setTokenFound) => {
    let currentToken = "";

    try {
        currentToken = await messaging.getToken({ vapidKey: publicKey });
        if (currentToken) {
            setTokenFound(true);
        } else {
            setTokenFound(false);
        }
    } catch (error) {
        console.log("An error occurred while retrieving token. ", error);
    }

    return currentToken;
};

export const onMessageListener = () =>
    new Promise((resolve) => {
        messaging.onMessage((payload) => {
            resolve(payload);
        });
    });
