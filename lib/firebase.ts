import { initializeApp } from "firebase/app";

//firebase integration is for push notification where we can send backup receipt to the student
const firebaseConfig = {
    apiKey: "AIzaSyDlSS9q9anZxmZ3PT7L75dJeNibEMKQsMM",
    authDomain: "what-the-fee.firebaseapp.com",
    projectId: "what-the-fee",
    storageBucket: "what-the-fee.appspot.com",
    messagingSenderId: "1060140150030",
    appId: "1:1060140150030:web:2e244dc9d1c5a38eca7b5f",
};

export const app = initializeApp(firebaseConfig);