const config = {
    apiKey: "AIzaSyAfHf815wv6KQU4lH9u6AsNnE16ok7Truc",
    authDomain: "testing-cabf3.firebaseapp.com",
    databaseURL: "https://testing-cabf3-default-rtdb.firebaseio.com",
    projectId: "testing-cabf3",
    storageBucket: "testing-cabf3.appspot.com",
    messagingSenderId: "432340193740"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const signIn = document.getElementById('sign-up');
  
  signIn.onclick = () => auth.signInWithPopup(provider);
   

