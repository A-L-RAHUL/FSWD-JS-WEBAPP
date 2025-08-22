// Digital Clock
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);

// To-Do List
function addTask() {
  let taskInput = document.getElementById("taskInput");
  if (taskInput.value.trim() === "") return;
  let li = document.createElement("li");
  li.className = "todo-item";
  li.innerHTML = `${taskInput.value} <button onclick="this.parentElement.remove()">❌</button>`;
  document.getElementById("todoList").appendChild(li);
  taskInput.value = "";
}

// Image Slider
let currentSlide = 0;
function showSlide(index) {
  const slides = document.querySelectorAll(".slider img");
  slides.forEach((s, i) => s.style.display = (i === index) ? "block" : "none");
}
function nextSlide() {
  const slides = document.querySelectorAll(".slider img");
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}
setInterval(nextSlide, 3000);

// Contact Form Validation
function validateForm(event) {
  event.preventDefault();
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!name || !email.match(emailPattern) || !message) {
    alert("Please fill in all fields correctly.");
    return false;
  }
  alert("Form submitted successfully!");
  return true;
}

// Gallery Lightbox
function openModal(src) {
  let modal = document.getElementById("modal");
  modal.style.display = "flex";
  modal.querySelector("img").src = src;
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}
