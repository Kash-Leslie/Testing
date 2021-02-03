function login(){
  var email = document.getElementById("signup-email").value;
  var password = document.getElementById("signup-password").value;
  var firebaseRef = firebase.database().ref();
  firebaseRef.child("Account").set(email);
}

  
  
   

