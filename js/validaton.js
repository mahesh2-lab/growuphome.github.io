  // Function to validate full name
  function validateFullName() {
    var fullNameInput = document.getElementById("fullName");
    var fullName = fullNameInput.value.trim();
    var fullnameerror = document.getElementById("fullnameerror");
    var fullNameRegex = /^[a-zA-Z\s]*$/;

    if (fullName === "") {
        fullnameerror.textContent = "Full Name is required";
    } else if (!fullNameRegex.test(fullName)) {
        fullnameerror.textContent = "Full Name must be string";
    } else {
        fullnameerror.textContent = "";
    }
  }

  // Function to validate username
  function validateUsername() {
    var usernameInput = document.getElementById("username");
    var username = usernameInput.value.trim();
    var usernameError = document.getElementById("usernameerror");
    var alphanumericPattern = /^[a-zA-Z0-9]+$/;

    if (username === "") {
      usernameError.textContent = "Username is required";
    } else if (!alphanumericPattern.test(username)) {
      usernameError.textContent = "Username must be alphanumeric";
    } else {
      usernameError.textContent = "";
    }
  }

  function validateEmail() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim();
    var emailError = document.getElementById("emailerror");
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (email === "") {
      emailError.textContent = "Email is required";
    } else if (!emailPattern.test(email)) {
      emailError.textContent = "Invalid email format";
    } else {
      emailError.textContent = "";
    }
  }

  function validatePassword() {
    var passwordInput = document.getElementById("password");
    var password = passwordInput.value.trim();
    var passwordError = document.getElementById("passworderror");
    var specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long";

      }
      else if (!specialCharRegex.test(password)) {
        passwordError.textContent = "Password must contain at least one special character";
      }
      else{
        passwordError.textContent = "";
      
      }
  }
  // Function to validate contact number
  function validateContactNumber() {
    var mobile_code = document.getElementById("mobile_code")
    var contactRegex = /^\d{10}$/;

    var contact = mobile_code.value.trim();
    var contactError = document.getElementById("contacterror");
    
    if (contact === "") {
        contactError.textContent = "Contact is required";
    } else if (!contactRegex.test(contact)) {
        contactError.textContent = "Invalid Contact format";
    } else {
        contactError.textContent = "";
    }
  }
