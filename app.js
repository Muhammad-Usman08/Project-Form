const nameInput = document.getElementById("name");
const fatherName = document.getElementById("fatherName");
const formName = document.getElementById("formName");
const button = document.getElementById('generate');
const formFatherName = document.getElementById('formFatherName');
const formMain = document.getElementById("formMain");
const information = document.getElementById("information");

//Disable the form when the informtaion is not given
information.style.display = "none"



function generate() { 
    //Sending Input to Form
    formName.innerHTML = nameInput.value
    formFatherName.innerHTML = fatherName.value
    information.style.display =  "none";
     
    //Display form when the generate button is clicked
    formMain.style.display = "block";   
   
}


