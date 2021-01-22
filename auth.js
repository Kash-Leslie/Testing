let config = {
    apiKey: "AIzaSyAfHf815wv6KQU4lH9u6AsNnE16ok7Truc",
    authDomain: "testing-cabf3.firebaseapp.com",
    databaseURL: "https://testing-cabf3-default-rtdb.firebaseio.com",
    projectId: "testing-cabf3",
    storageBucket: "testing-cabf3.appspot.com",
    messagingSenderId: "432340193740",
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  let database = firebase.database();
  let itemsRef = firebase.database().ref("items");

  function updateFirebase() {
      
  };

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("sign-up").addEventListener('click',function()
    {
         var lostItem = {
           username: document.getElementById("signup-email").value,
           password: document.getElementById("signup-password").value,
         };
         itemsRef.push(lostItem);
         });
});
