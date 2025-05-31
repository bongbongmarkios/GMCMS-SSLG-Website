import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const auth = getAuth();

  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Login successful!");
          window.location.href = "dashboard.html"; // Redirect after successful login
        })
        .catch((error) => {
          alert("Login failed: " + error.message);
        });
    });
  }

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("username").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Registration successful!");
          window.location.href = "login.html"; // Redirect to login after registration
        })
        .catch((error) => {
          alert("Registration failed: " + error.message);
        });
    });
  }
});
