// register.js
window.onload = function () {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (userData && userData.length > 0) {
    window.location.href = "user.html"; // Redirect to the user page if user data exists
  }

  document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission
      const formData = new FormData(this);
      saveDataToLocal(formData);
      window.location.href = "user.html"; // Redirect to the user page
    });
};
function saveDataToLocal(formData) {
  const userData = JSON.parse(localStorage.getItem("userData")) || [];
  userData.push(Object.fromEntries(formData));
  localStorage.setItem("userData", JSON.stringify(userData));
}
