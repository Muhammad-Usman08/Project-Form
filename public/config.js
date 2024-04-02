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
    const SignUpName = document.getElementById("Name");
    const SignUpEmail = document.getElementById("Email");
    const SignUpPassword = document.getElementById("password");


    // Sign UP
    firebase.auth().createUserWithEmailAndPassword(SignUpEmail.value, SignUpPassword.value)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            console.log(user);
            window.location.href = "form.html"

        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
            if (SignUpName.value == "") {
                alert("Enter your Name");
            }
            else if (SignUpEmail.value == "") {
                alert("Enter your email");
            }
            else if (SignUpPassword.value == "") {
                alert("Enter Password");
            }
            else {
                alert(errorMessage);
            }
        }
        );

}