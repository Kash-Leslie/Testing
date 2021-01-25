const config = {
    apiKey: "AIzaSyAfHf815wv6KQU4lH9u6AsNnE16ok7Truc",
    authDomain: "testing-cabf3.firebaseapp.com",
    databaseURL: "https://testing-cabf3-default-rtdb.firebaseio.com",
    projectId: "testing-cabf3",
    storageBucket: "testing-cabf3.appspot.com",
    messagingSenderId: "432340193740",
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  const firestore = firebase.firestore();
  const itemsRef = firestore.doc("auth/test");

    document.querySelector("#sign-up").addEventListener('click',function()
    {
           itemsRef.set ({
           user: document.querySelector("#signup-email").value,
           pass: document.querySelector("#signup-password").value,
           });
       
   });

