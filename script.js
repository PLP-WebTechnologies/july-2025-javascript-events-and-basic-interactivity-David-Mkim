// === PART 1: Basic Event Handling ===

// Respond to button click
const clickBtn = document.getElementById("clickMeBtn");
const messageArea = document.getElementById("messageArea");

clickBtn.addEventListener("click", () => {
  messageArea.textContent = "🎉 You clicked the button!";
});

// === PART 2a: Light/Dark Mode Toggle ===

const modeToggleBtn = document.getElementById("modeToggleBtn");

modeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    modeToggleBtn.textContent = "Switch to Light Mode";
  } else {
    modeToggleBtn.textContent = "Switch to Dark Mode";
  }
});

// === PART 2b: Collapsible FAQ ===

const questions = document.querySelectorAll(".question");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    q.parentElement.classList.toggle("open");
  });
});

// === PART 3: Form Validation ===

const form = document.getElementById("signupForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Validation logic
  if (name.length < 3) {
    feedback.textContent = "Name must be at least 3 characters.";
    return;
  }

  const emailRegex = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    feedback.textContent = "Invalid email format.";
    return;
  }

  if (password.length < 6) {
    feedback.textContent = "Password must be at least 6 characters.";
    return;
  }

  // If all validations pass
  feedback.style.color = "green";
  feedback.textContent = "Form submitted successfully! 🎉";
});
