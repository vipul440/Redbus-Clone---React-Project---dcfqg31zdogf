import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyClRAf1nF8zeJ-VS4vHxyRxQUmcE5Jz7DM",
  authDomain: "redbus-7d538.firebaseapp.com",
  projectId: "redbus-7d538",
  storageBucket: "redbus-7d538.appspot.com",
  messagingSenderId: "943368361784",
  appId: "1:943368361784:web:d4465ecb61f29a18d593cd",
  measurementId: "G-KYQ8D2HFP4",
};
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };

export default app;
