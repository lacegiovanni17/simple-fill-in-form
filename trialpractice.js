const button = document.querySelector("#signin"); 
let h2Element = document.querySelector(".alert"); 
let nameInput = document.getElementById("name"); 
let emailInput = document.getElementById("email"); 
let passwordInput = document.getElementById("password"); 

function submitForm(event) {
    event.preventDefault(); 

    if (nameInput.value === "") {
        h2Element.textContent = "Name is required"; 
        return;        
    }

    if (emailInput.value === "") {
        h2Element.textContent = "Email is reqired"; 
        return; 
    }

    if (passwordInput.value === "") {
        h2Element.textContent = "Password is required"; 
        return; 
    }

    let nameStr = nameInput.value; 
    h2Element.textContent = "Welcome " + nameStr;  
}

button.addEventListener("click", submitForm); 