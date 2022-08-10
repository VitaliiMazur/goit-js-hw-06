const form = document.querySelector(".login-form");

form.addEventListener("submit", formEl);
function formEl(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
    return;
  } else console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
