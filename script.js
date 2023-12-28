const toggle = document.querySelector(".toggle");
const body = document.querySelector("body");
// theme changer button
toggle.addEventListener("click", () => {
  body.classList.toggle("toggler");
  if (toggle.getAttribute("src") == "./images/icon-moon.svg") {
    toggle.setAttribute("src", "images/icon-sun.svg");
  } else {
    toggle.setAttribute("src", "./images/icon-moon.svg");
  }
});

// creating the task 
const form = document.querySelector("form");
const checkbox = document.querySelector(".check");
const checkImg = document.querySelector(".check-img");
const taskValue = document.querySelector(".task-value");

// function to creat the task
const creatTask = (name, reminder) => {
  // code to create the task
  let taskArray = [];
  let task = {
    id: `${Math.floor(Math.random() * 100000)}`,
    taskInfo: name,
    reminder: reminder
  }
}