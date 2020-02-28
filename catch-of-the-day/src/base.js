import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCYtVniLwSjCBg-IO3JtaloWrRo3yCI1Ps",
  authDomain: "catch-of-the-day-ryan-fraser.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ryan-fraser.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export { firebaseApp };

//This is a default export
export default base;
