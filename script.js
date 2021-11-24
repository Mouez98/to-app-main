//Variables

const theme = document.querySelector(".svg");
const body = document.querySelector("body");
const form = document.querySelector("form");
const tasksContainer = document.querySelector(".tasks");
let arrayOfTasks = [];

//Event Listener

//submit task
form.addEventListener("submit", addTask);

//change the theme
theme.addEventListener("click", function (e) {
  if (e.currentTarget.classList.contains("svg")) {
    if (body.classList.contains("theme")) {
      body.classList.toggle("light");
    }
  }
});

//Function

function addTask(e) {
  e.preventDefault();
  //Input Value
  let input = document.getElementById("input").value;
  //Add the task to the arrayOfTasks
  arrayOfTasks.push(input)
  //Create the new Div
  let task = document.createElement("div");
  //Give the div className
  task.className = "task";
  //Add InnerHtml
  task.innerHTML = `
          <div class="gradient-border"></div> 
          <div class="check">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" />
              </svg>
            </div>
          
          <h4> ${input}</h4>
          
          <button class="delete"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg></button>
    `;
  //Footer of taskConrtainer
  let footer = document.getElementById("footer");
  //Insert The task Before the footer
  tasksContainer.insertBefore(task, footer);
  //Empty tha input value
  input = "whaaaat";
}
