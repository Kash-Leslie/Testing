function login(){
  var database = firebase.database();
  var email = document.getElementById("signup-email").value;
  var password = document.getElementById("signup-password").value;
  firebase.database().ref('users/').set({
    password: password,
    email: email,
     });
}

  
  
   

