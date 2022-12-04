let adminEmail = document.getElementById('email');
let adminPass = document.getElementById('password');
let btn = document.querySelector('.btn');
let numberOfAttempt = [];
let loginAttempts = 100;
let form_wrapper = document.querySelector('.form_wrapper  form')
let timer = document.querySelector('.timer')
btn.addEventListener("click", () => {
    event.preventDefault();
    let email = "admin@gmail.com";
    let pass = "admin0101";
    let emailError = document.getElementById('emailError');
    let passError = document.getElementById('passError');
    let both = document.getElementById('both');

    if (email == adminEmail.value && pass == adminPass.value) {
        emailError.style.display = "none";
        passError.style.display = "none";
        both.style.display = "none";
        swal("Good job!", "Logged In Successfully", "success");
    }
    else if(adminPass.value.trim()==="" && adminEmail.value.trim()===""){
        emailError.style.display = "none";
        passError.style.display = "none";
        both.style.display = "block";
        both.innerHTML = "<b>Error:</b>The Email & Password field is empty.";
    }
    else if (adminEmail.value.trim() === "") {
        emailError.style.display = "block";
        emailError.innerHTML = "<b>Error:</b>The Email field is empty.";
        both.style.display = "none";
        passError.style.display = "none";
    }
    else if (adminPass.value.trim() === "") {
        passError.innerHTML = "<b>Error:</b>The password field is empty.";
        both.style.display = "none";
        emailError.innerHTML = ""
    }
    else {
        both.style.display = "block";
        both.innerHTML = "Invalid Login";
        emailError.style.display = "none";
        passError.style.display = "none";
        numberOfAttempt.push(loginAttempts - 1);
        loginAttempts -= 1;
    }
    if (numberOfAttempt.length === 5) {
        both.style.display = "none";
        form_wrapper.style.display = "none";
        const limit = 31;
        let i = 1;
        timer.style.display = "block";
        timer.innerHTML = "To much login";
        const limitedInterval = setInterval(() => {
            timer.innerHTML = `Locked ! Can't be used now <br> Try in ${i++} seconds`;
            if (i > limit) {
                clearInterval(limitedInterval);
                form_wrapper.style.display = "block";
                timer.innerHTML = "";
                guesses_num.length = 0;
            }
        }, 1000);
    }
    

})

