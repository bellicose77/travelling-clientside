console.log(process.env);
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};
// const firebaseConfig = {
//     apiKey: "AIzaSyDHv3u87agESnx5qmz879JFvZV1yllfZyQ",
//     authDomain: "genius-car-mechanics-cff5b.firebaseapp.com",
//     projectId: "genius-car-mechanics-cff5b",
//     storageBucket: "genius-car-mechanics-cff5b.appspot.com",
//     messagingSenderId: "166293624428",
//     appId: "1:166293624428:web:d5a12db636396136e1ea49"
// };

export default firebaseConfig;