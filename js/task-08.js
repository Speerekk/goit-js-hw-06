// Получаем форму и назначаем обработчик события submit
const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); // Предотвращаем перезагрузку страницы

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  // Проверяем, заполнены ли все поля
  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Пожалуйста, заполните все поля");
    return;
  }

  // Создаем объект с данными формы
  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  // Выводим объект с данными в консоль
  console.log(formData);

  // Очищаем значения полей формы
  loginForm.reset();
}
