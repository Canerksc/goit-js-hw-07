const form = document.querySelector(".login-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const { password, email } = form.elements;
    const  passwordValue= password.value.trim();
    const  emailValue= email.value.trim();
if (emailValue === "" || passwordValue === "" ) {
    alert("All form fields must be filled in");
    return;
}
    const formData = {
        password: passwordValue,
        email:emailValue,
    };
    
console.log("Form Verisi:", formData);
form.reset();
});