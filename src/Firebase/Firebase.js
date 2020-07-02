import  firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC9SUU6TD8oTaxfcIcXI8kDODx0zGcCpN4",
    authDomain: "blog-ec2e0.firebaseapp.com",
    databaseURL: "https://blog-ec2e0.firebaseio.com",
    projectId: "blog-ec2e0",
    storageBucket: "blog-ec2e0.appspot.com",
    messagingSenderId: "1075170370596",
    appId: "1:1075170370596:web:008484881ff216c265e4b1",
    measurementId: "G-PVNF1F9XLS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const serverTimestamp = () => firebase.firestore.Timestamp.fromDate(new Date())
export const firebaseStorage = firebase.storage() 

export default firebase