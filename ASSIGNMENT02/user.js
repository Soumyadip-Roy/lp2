// user.js
window.onload = function () {
  const userData = JSON.parse(localStorage.getItem("userData"));
  if (!userData || userData.length === 0) {
    window.location.href = "register.html"; // Redirect to the register page if no user data exists
  } else {
    const user = userData[userData.length - 1]; // Get the last registered user
    const greetingDiv = document.getElementById("userGreeting");
    greetingDiv.textContent = `Hi, ${user.name}`;

    document.getElementById("logoutBtn").addEventListener("click", function () {
      localStorage.removeItem("userData"); // Clear user data from local storage
      window.location.href = "register.html"; // Redirect to the register page
    });
  }
};
