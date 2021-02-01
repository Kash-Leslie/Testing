function login(){
  var email = document.getElementById("signup-email").value;
  var email = document.getElementById("signup-password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
}

  
  
   

