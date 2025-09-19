document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Get inputs
  let fname = document.getElementById("fname");
  let mname = document.getElementById("mname");
  let lname = document.getElementById("lname");
  let email = document.getElementById("email");

  // Get error placeholders
  let fnameError = document.getElementById("fnameError");
  let mnameError = document.getElementById("mnameError");
  let lnameError = document.getElementById("lnameError");
  let emailError = document.getElementById("emailError");

  // Reset errors
  fnameError.textContent = "";
  mnameError.textContent = "";
  lnameError.textContent = "";
  emailError.textContent = "";
  fname.classList.remove("error-border");
  mname.classList.remove("error-border");
  lname.classList.remove("error-border");
  email.classList.remove("error-border");

  let valid = true;
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation
  if (fname.value.trim() === "") {
    fnameError.textContent = "First name is required";
    fname.classList.add("error-border");
    valid = false;
  }

  if (mname.value.trim() === "") {
    mnameError.textContent = "Middle initial is required";
    mname.classList.add("error-border");
    valid = false;
  }

  if (lname.value.trim() === "") {
    lnameError.textContent = "Last name is required";
    lname.classList.add("error-border");
    valid = false;
  }

  if (email.value.trim() === "") {
    emailError.textContent = "Email is required";
    email.classList.add("error-border");
    valid = false;
  } else if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = "Invalid email format";
    email.classList.add("error-border");
    valid = false;
  }

  if (valid) {
    alert("✅ Success!");
  }
});
