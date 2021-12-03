const theme = document.querySelector(".svg");
const form = document.querySelector("form");
const tasksContainer = document.getElementById("tasks");
const delBtnAll = document.querySelector(".clear");
let tasksFooter = document.getElementById("footer");


let arrayOfTasks = [];

//Event Listener
document.addEventListener("DOMContentLoaded", itemsNumber)
form.addEventListener("submit", addTask);
theme.addEventListener("click", themeToggle);
tasksContainer.addEventListener("click", deleteOrDone );
tasksFooter.addEventListener("click", completionState);
delBtnAll.addEventListener("click", delAll)

//Function

//Delete All Tasks 
function delAll(){
  let tasks = tasksContainer.children;
[...tasks].forEach(task => {
  task.classList.contains("task") ? tasksContainer.removeChild(task): tasksContainer;
  itemsNumber()
})
}
// Theme function
function themeToggle(e){
  //Get The Body 
const body = document.querySelector("body");
  if (e.currentTarget.classList.contains("svg")) {
    if (body.classList.contains("theme")) {
      body.classList.toggle("light");
    }
  }
}
//State Of the task function's(Delete or Done)
function deleteOrDone(task){
  const todo = task.target ;
  
  //Delete Todo 
  if(todo.classList.contains("delete")){
    tasksContainer.removeChild(todo.parentNode);
    itemsNumber();
  }
  //Finished todo
  if(todo.classList.contains("check")){
    todo.parentNode.parentNode.classList.toggle("finished")
  }
  }

function addTask(e) {
  e.preventDefault();
  //Input 
  const input = document.getElementById("input");
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
          <div class="gradient-border">
           <div class="check">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
                <path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6" />
              </svg>
            </div>
          </div> 
          
          
          <h4> ${inputValue}</h4>
          
          <button class="delete"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg></button>
    `;

  //Insert The task Before the footer
  tasksContainer.insertBefore(task, tasksFooter);
  //Empty tha input value
  input.value = "";
}
itemsNumber()
stylingTask()
}
//Items Number

function itemsNumber(){
  let tasksNumber = document.querySelector(".items-left");

  tasksNumber.innerText = `${tasksContainer.childElementCount - 1} items left`
  if(tasksContainer.childElementCount === 1){
    //Edit Footer's Border-raduis
    tasksFooter.className = "zero-items";
  }
}

// Display items depend of its state
 
function completionState(e){
const todos = tasksContainer.children;
let stateColor = e.target
Array.from(todos).forEach(todo => {
  switch(e.target.className){
  case 'all' :
if(todo.classList.contains("task")){
  todo.style.display = "flex";
  stateColor.style.color = "#3a7bfd"
}
break;
case 'active' :
  if(!todo.classList.contains("finished") || todo.id == 'footer'){
    todo.style.display = "flex";
    stateColor.style.color = "#3a7bfd"
  } else {
    todo.style.display = "none";
  }
  break;
case 'completed' :
  if(todo.classList.contains("finished") || todo.id == 'footer'){
    todo.style.display = "flex";
    stateColor.style.color = "#3a7bfd"
  } else {
    todo.style.display = "none";
  }
  break;
  
}
});
}

//Displaying Delete Btn on mouseover

function stylingTask(){
  //Loop throught tasks
  [...tasksContainer.children].forEach(task => {
    if(task.classList.contains("task")){
       task.addEventListener("mouseover", ()=>{
         //Displaying The invisible items
         [...task.children].forEach(el => {
           if(el.classList.contains("delete")){
             el.style.display = "flex";
           }
         })
       }
       )
       task.addEventListener("mouseout", () => {
        [...task.children].forEach(el => {
          el.classList.contains("delete") ? el.style.display = "none": el ;

        })
       })
    }
  })
}
stylingTask()
