

let getValue = ()=>{
    const name  = document.getElementById("name");
    const fatherName  = document.getElementById("fatherName");
    const image  = document.getElementById("image");
    const formName = document.getElementById("formName");
    console.log(name.value);
    console.log(fatherName.value);
    console.log(image.value)
    
    formName.innerHTML = name.value

    
}
