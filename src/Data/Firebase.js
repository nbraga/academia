
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDhSvHxRfuFjQ17GBgeLGmXpVS7wzG3YOU",
  authDomain: "academia-site.firebaseapp.com",
  projectId: "academia-site",
  storageBucket: "academia-site.appspot.com",
  messagingSenderId: "325685750426",
  appId: "1:325685750426:web:a25355d49cfcb57d204d23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default firebaseConfig;