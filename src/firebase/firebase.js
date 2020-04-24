import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {

};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore() ;
export const db = baseDb ;