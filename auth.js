function login(){
  var email = document.getElementById("signup-email").value;
  var email = document.getElementById("signup-password").value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
  });
}

  
  
   

