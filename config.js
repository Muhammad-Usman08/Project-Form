const firebaseConfig = {
    apiKey: "AIzaSyDf4Iw3_56H_2QoTmWr9wJraGNHL5cx8u8",
    authDomain: "form-app-825f3.firebaseapp.com",
    projectId: "form-app-825f3",
    storageBucket: "form-app-825f3.appspot.com",
    messagingSenderId: "1093745366019",
    appId: "1:1093745366019:web:b0c3894dacfcb4ee3aaa36"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


let getValue = () => {

    //  Getting input values
    const LoginName = document.getElementById("Name");
    const loginEmail = document.getElementById("Email");
    const password = document.getElementById("password");


    if (LoginName.value == "") {
        alert("Enter your Name");
    }
    else if (loginEmail.value == "") {
        alert("Enter your email");
    }
    else if (password.value == "") {
        alert("Enter Password");
    }


    // Sign UP
    firebase.auth().createUserWithEmailAndPassword(loginEmail.value, password.value)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });


    //   Login
    firebase.auth().signInWithEmailAndPassword(loginEmail.value, password.value)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });

}

