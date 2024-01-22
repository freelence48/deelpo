// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  get,
  set,
  child,
  update,
  query,
  limitToLast,
  remove,
  push,
} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9IVikCzbLe2HYEyVVSCukuc_3BjlRfB8",
  authDomain: "deelop-4ad5d.firebaseapp.com",
  projectId: "deelop-4ad5d",
  storageBucket: "deelop-4ad5d.appspot.com",
  messagingSenderId: "573038555261",
  appId: "1:573038555261:web:b34a004922bfde76f2c114"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Function to fetch and display data
const displayData = () => {
    // Get the reference to the database
    const dbRef = ref(database);
    
    // Get the reference to the 'users' node
    const usersRef = child(dbRef, "users");
    
    // Get the last 5 users
    const lastFiveUsers = query(usersRef, limitToLast(5));
    
    // Get the data from the database
    get(lastFiveUsers).then((snapshot) => {
        // Get the data as an object
        const data = snapshot.val();
    
        // Loop through the object
        for (const user in data) {
        // Get the user data
        const userData = data[user];
    
        // Create a new <li> element
        const li = document.createElement("li");
    
        // Set the text content to the user data
        li.textContent = `Name: ${userData.name}, Age: ${userData.age}`;
    
        // Append the <li> element to the <ul> element
        document.getElementById("users").appendChild(li);
        }
    });

    // Get the reference to the 'users' node
};

// Call the displayData function when the page loads
window.onload = () => {
  console.log("Page loaded");
  displayData();
};
