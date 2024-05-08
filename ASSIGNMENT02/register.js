document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission
    const formData = new FormData(this);
    saveDataToLocalStorage(formData);
  });

function saveDataToLocalStorage(formData) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "save-registration.php", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const userData = JSON.parse(xhr.responseText);
        localStorage.setItem("userData", JSON.stringify(userData));
        window.location.href = "user.html"; // Redirect to the user page
      } else {
        console.error("Error saving registration data");
      }
    }
  };
  xhr.send(JSON.stringify(Object.fromEntries(formData)));
}
