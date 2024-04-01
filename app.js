const nameInput = document.getElementById("name");
const fatherName = document.getElementById("fatherName");
const dateOfBirth = document.getElementById("date");
const email = document.getElementById("email");
const education = document.getElementBy;
const CNIC = document.getElementById("CNIC");
const contact = document.getElementById("contact");
const address = document.getElementById("address");
const field = document.getElementById("button");
const country = document.getElementById("button");





// const formName = document.getElementById("formName");
// const button = document.getElementById('generate');
// const formFatherName = document.getElementById('formFather');
// const formMain = document.getElementById("formMain");
// const information = document.getElementById("information");
// const backButton = document.getElementById("button");

//Disable the form when the informtaion is not given
formMain.style.display = "none"

function generate() {
    //Sending Input to Form
    formName.innerHTML = nameInput.value
    formFatherName.innerHTML = fatherName.value
    information.style.display = "none";

    //Display form when the generate button is clicked
    formMain.style.display = "block";

}


backButton.addEventListener(onclick, () => {
    formMain.style.display = "none"
    information.style.display = "flex"
}
)

