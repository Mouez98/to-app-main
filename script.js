const theme = document.querySelector(".svg");
const body = document.querySelector("body");
const form = document.querySelector("form");
const tasksContainer = document.querySelector(".tasks");
const input = document.getElementById("input");
let tasksNumber = document.querySelector(".items-left");
let arrayOfTasks = [];

//Event Listener
document.addEventListener("DOMContentLoaded", itemsNumber)
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
//State Of the task (Delete or Done)
tasksContainer.addEventListener("click", function(task){
const todo = task.target ;

//Delete Todo 
if(todo.classList.contains("delete")){
  tasksContainer.removeChild(todo.parentNode);
  itemsNumber();
}
//Finished todo
if(todo.classList.contains("check")){
  todo.parentNode.classList.toggle("finished")
}
})

//Function

function addTask(e) {
  e.preventDefault();
  //Input Value
  let inputValue = input.value;
  if(inputValue){
  //Add the task to the arrayOfTasks
  arrayOfTasks.push(inputValue)
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
          
          <h4> ${inputValue}</h4>
          
          <button class="delete"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg></button>
    `;
  //Footer of taskConrtainer
  let footer = document.getElementById("footer");
  //Insert The task Before the footer
  tasksContainer.insertBefore(task, footer);
  //Empty tha input value
  input.value = "";
}
itemsNumber()
}
//Items Number

function itemsNumber(){
  tasksNumber.innerText = `${tasksContainer.childElementCount - 1} items left`
}