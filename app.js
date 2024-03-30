
const name = document.getElementById("name");
const fatherName = document.getElementById("fatherName");
const formName = document.getElementById("formName");
const button = document.getElementById('generate');
const formFatherName = document.getElementById('formFatherName');



function generate() {
    formName.innerHTML = name.value
    formFatherName.innerHTML = fatherName.value
}


