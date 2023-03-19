import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAie-p7PODmgpQDfOwWXqaI21q4fe75x7g",
  authDomain: "fastmarket-ea763.firebaseapp.com",
  projectId: "fastmarket-ea763",
  storageBucket: "fastmarket-ea763.appspot.com",
  messagingSenderId: "919989253562",
  appId: "1:919989253562:web:db9b1733a1981ced5c9983",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
);
