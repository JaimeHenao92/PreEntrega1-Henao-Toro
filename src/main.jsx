import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZ9Xd8vxAJ_QjYOqMidJN7AiPl988xhU4",
  authDomain: "innpollo1.firebaseapp.com",
  projectId: "innpollo1",
  storageBucket: "innpollo1.appspot.com",
  messagingSenderId: "470558480752",
  appId: "1:470558480752:web:e332c4370927337bb397b5"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
