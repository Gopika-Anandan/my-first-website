// Welcome alert
window.onload = () => {
  alert("Welcome to the Skills Test!");
  updateStudentCount();
};

// Theme toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Student counter
function updateStudentCount() {
  const count = document.querySelectorAll("#studentsTable tr").length - 1;
  document.getElementById("studentCount").textContent = count;
}

// Add new student
document.getElementById("addStudentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("studentName").value;
  const age = document.getElementById("studentAge").value;
  const skill = document.getElementById("studentSkill").value;

  if (!name || !age || !skill) {
    alert("Fill all fields!");
    return;
  }

  const table = document.getElementById("studentsTable");
  const row = table.insertRow();
  row.insertCell(0).textContent = name;
  row.insertCell(1).textContent = age;
  row.insertCell(2).textContent = skill;

  updateStudentCount();
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const msgBox = document.getElementById("formMsg");

  if (!name || !email || !message) {
    msgBox.textContent = "Please fill in all fields.";
    msgBox.style.color = "red";
  } else {
    msgBox.textContent = "Form submitted successfully!";
    msgBox.style.color = "green";
  }
});
