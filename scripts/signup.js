let form=document.getElementById("signupForm");
form.addEventListener("submit",function(){
  event.preventDefault();
let username=form.username.value;
let email=form.email.value;
let password=form.password.value;
let confirmPassword=form.confirmPassword.value;
let userObj={username, email, password, confirmPassword }
})