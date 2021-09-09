let isPassValid = false;
let isEmailValid = false;

const clickSubmit = () => {
  if (isEmailValid && isPassValid) {
    alert("Hurraayy, you are on our team!");
    location.reload();
  }
};

// emailValidationMessage: to show email validation message-
const emailValidationMessage = (value, wrong, right) => {
  const regEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regEmail.test(value) === true) {
    wrong.style.display = "none";
    right.style.display = "block";
    isEmailValid = true;
  } else {
    right.style.display = "none";
    wrong.style.display = "block";
  }
};

// passValidationMessage: to show pass validation message-
const passValidationMessage = (value, wrong, right) => {
  const charactersValid = document.getElementById("characters8");
  const letterValid = document.getElementById("letter1");
  const digitValid = document.getElementById("digit1");
  const specialChr = document.getElementById("specialChr");
  const regPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  if (value.length > 1 === false) {
    charactersValid.style.display = "block";
    digitValid.style.display = "block";
    letterValid.style.display = "block";
    specialChr.style.display = "block";
  }
  if (value.length === 8) {
    charactersValid.style.display = "none";
  }
  if (/[a-z]/i.test(value) === true) {
    letterValid.style.display = "none";
  }
  if (/[!@#$%^&*]/.test(value) === true) {
    specialChr.style.display = "none";
  }
  if (/[0-9]/.test(value) === true) {
    digitValid.style.display = "none";
  }
  console.log(regPass.test(value) === true);
  if (regPass.test(value) === true) {
    wrong.style.display = "none";
    right.style.display = "block";
    isPassValid = true;
  } else {
    right.style.display = "none";
    wrong.style.display = "block";
  }
};

// validation: main function for keyup email & pss field-
const validation = (elem) => {
  document
    .getElementById("input-" + elem)
    .addEventListener("keyup", (event) => {
      const inputValue = event.target.value;
      const wrongContainer = document.getElementById("wrong-" + elem);
      const rightContainer = document.getElementById("right-" + elem);

      if (event.target.name === "email") {
        emailValidationMessage(inputValue, wrongContainer, rightContainer);
      } else {
        passValidationMessage(inputValue, wrongContainer, rightContainer);
      }
    });
};
validation("email");
validation("pass");
