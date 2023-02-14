import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyALTFj3VuCqpMeCdp2XcBvE-9W4nFwJ76w",
    authDomain: "cart-a983c.firebaseapp.com",
    projectId: "cart-a983c",
    storageBucket: "cart-a983c.appspot.com",
    messagingSenderId: "965321684768",
    appId: "1:965321684768:web:f547e3a5d1a14e27904945"
  };
    firebase.initializeApp(firebaseConfig); 
    
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <App />
  
);




