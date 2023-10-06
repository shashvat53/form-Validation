// function checkValidation(email, password) {
//   const isEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
//     email
//   );
//   const isPassword =
//     /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

//   if (!isEmail) return "Email is not valid";
//   if (!isPassword) return "Password is not valid";
//   return null;
// }

const userName = document.getElementById("username");
const Password = document.getElementById("password");
let flag = 1;
const validData = () => {
  // For Name field

  if (userName.value == "") {
    const userError = document.getElementById("usererror");
    userError.innerHTML = "please fill the Name";
    flag = 0;
    return false;
  } else if (userName.value.length < 4) {
    const userError = document.getElementById("usererror");
    userError.innerHTML = "It contains max. 4 char";
    flag = 0;
    return false;
  } else {
    const userError = document.getElementById("usererror");
    userError.innerHTML = "";
    flag = 1;
  }

  // For Password field

  if (Password.value == "") {
    const passwordError = document.getElementById("passworderror");
    passwordError.innerHTML = "Please fill the password";
    flag = 0;
    return false;
  } else {
    const passwordError = document.getElementById("passworderror");
    passwordError.innerHTML = "";
    flag = 1;
  }

  if (flag) {
    return true;
  } else {
    return false;
  }
};
