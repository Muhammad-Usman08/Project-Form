
//Getting inputs
const nameInput = document.getElementById("name");
const fatherName = document.getElementById("fatherName");
const dateOfBirth = document.getElementById("date");
const email = document.getElementById("email");
const education = document.querySelector(".education");
const cnic = document.getElementById("CNIC");
const contact = document.getElementById("contact");
const address = document.getElementById("address");
const field = document.querySelector('.options');
const country = document.querySelector(".country-input");


//Getting Form
const formName = document.getElementById("formName");
const formFatherName = document.getElementById('formFather');
const formDateofBirth = document.getElementById('formDate');
const formEmail = document.getElementById('formEmail');
const formEducation = document.getElementById('formEducation');
const formCNIC = document.getElementById('formCNIC');
const formContact = document.getElementById('formContact');
const formAddress = document.getElementById('formAddress');
const formField = document.getElementById('formField');
const formCountry = document.getElementById('formCountry');

//Getting buttons,and both pages mainElement
const button = document.getElementById('generate');
const formMain = document.getElementById("formMain");
const information = document.getElementById("information");
const backButton = document.getElementById("button");
const informationHeading = document.getElementById("information-heading");

//Disable the form when the informtaion is not given
formMain.style.display = "none"



let generate = () => {
    //Sending Input to Form
    formName.innerHTML = nameInput.value;
    formFatherName.innerHTML = fatherName.value;
    formDateofBirth.innerHTML = dateOfBirth.value;
    formEmail.innerHTML = email.value;
    formEducation.innerHTML = education.value;
    formCNIC.innerHTML = cnic.value;
    formContact.innerHTML = contact.value;
    formAddress.innerHTML = address.value;
    formField.innerHTML = field.value;
    formCountry.innerHTML = country.value;

    information.style.display = "none";
    informationHeading.style.display = "none"

    //Display form when the generate button is clicked
    formMain.style.display = "block";


    //Sending Information to LocalStorage
    let informationObj = {
        name: nameInput.value,
        fatherName: fatherName.value,
        dateOfBirth: dateOfBirth.value,
        email: email.value,
        education: education.value,
        cnic: cnic.value,
        contact: contact.value,
        address: address.value,
        field: field.value,
        country: country.value
    }

    localStorage.setItem("UserInformation", JSON.stringify(informationObj));


}

//BackButton Event
backButton.addEventListener('click', () => {
    formMain.style.display = "none"
    information.style.display = "flex"
}
)