const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", () => {
  const expectedLength = parseInt(validationInput.dataset.length);
  const currentLength = validationInput.value.length;

  if (currentLength === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
