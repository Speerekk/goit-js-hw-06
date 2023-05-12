const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const inputValue = input.value;
  const expectedLength = input.dataset.length;

  if (inputValue.length === parseInt(expectedLength)) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
});
