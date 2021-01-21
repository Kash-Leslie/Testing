let config = {
    apiKey: "AIzaSyAfHf815wv6KQU4lH9u6AsNnE16ok7Truc",
    authDomain: "testing-cabf3.firebaseapp.com",
    databaseURL: "https://testing-cabf3-default-rtdb.firebaseio.com/",
    projectId: "testing-cabf3"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  let itemsRef = firebase.database().ref("items");

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("sign-up")addEventListener('click',function()
    {
         var lostItem = {
           username: document.getElementById("signup-email").value,
           password: document.getElementById("signup-password").value,
         };
         itemsRef.update(lostItem);
         });
});
