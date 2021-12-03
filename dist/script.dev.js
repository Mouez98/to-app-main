"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var theme = document.querySelector(".svg");
var form = document.querySelector("form");
var tasksContainer = document.getElementById("tasks");
var delBtnAll = document.querySelector(".clear");
var tasksFooter = document.getElementById("footer");
var arrayOfTasks = []; //Event Listener

document.addEventListener("DOMContentLoaded", itemsNumber);
form.addEventListener("submit", addTask);
theme.addEventListener("click", themeToggle);
tasksContainer.addEventListener("click", deleteOrDone);
tasksFooter.addEventListener("click", completionState);
delBtnAll.addEventListener("click", delAll); //Function
//Delete All Tasks 

function delAll() {
  var tasks = tasksContainer.children;

  _toConsumableArray(tasks).forEach(function (task) {
    task.classList.contains("task") ? tasksContainer.removeChild(task) : tasksContainer;
    itemsNumber();
  });
} // Theme function


function themeToggle(e) {
  //Get The Body 
  var body = document.querySelector("body");

  if (e.currentTarget.classList.contains("svg")) {
    if (body.classList.contains("theme")) {
      body.classList.toggle("light");
    }
  }
} //State Of the task function's(Delete or Done)


function deleteOrDone(task) {
  var todo = task.target; //Delete Todo 

  if (todo.classList.contains("delete")) {
    tasksContainer.removeChild(todo.parentNode);
    itemsNumber();
  } //Finished todo


  if (todo.classList.contains("check")) {
    todo.parentNode.parentNode.classList.toggle("finished");
  }
}

function addTask(e) {
  e.preventDefault(); //Input 

  var input = document.getElementById("input"); //Input Value

  var inputValue = input.value;

  if (inputValue) {
    //Add the task to the arrayOfTasks
    arrayOfTasks.push(inputValue); //Create the new Div

    var task = document.createElement("div"); //Give the div className

    task.className = "task"; //Add InnerHtml

    task.innerHTML = "\n          <div class=\"gradient-border\">\n           <div class=\"check\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"11\" height=\"9\">\n                <path fill=\"none\" stroke=\"#FFF\" stroke-width=\"2\" d=\"M1 4.304L3.696 7l6-6\" />\n              </svg>\n            </div>\n          </div> \n          \n          \n          <h4> ".concat(inputValue, "</h4>\n          \n          <button class=\"delete\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\"><path fill=\"#494C6B\" fill-rule=\"evenodd\" d=\"M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z\"/></svg></button>\n    "); //Insert The task Before the footer

    tasksContainer.insertBefore(task, tasksFooter); //Empty tha input value

    input.value = "";
  }

  itemsNumber();
  stylingTask();
} //Items Number


function itemsNumber() {
  var tasksNumber = document.querySelector(".items-left");
  tasksNumber.innerText = "".concat(tasksContainer.childElementCount - 1, " items left");

  if (tasksContainer.childElementCount === 1) {
    //Edit Footer's Border-raduis
    tasksFooter.className = "zero-items";
  }
} // Display items depend of its state


function completionState(e) {
  var todos = tasksContainer.children;
  var stateColor = e.target;
  Array.from(todos).forEach(function (todo) {
    switch (e.target.className) {
      case 'all':
        if (todo.classList.contains("task")) {
          todo.style.display = "flex";
          stateColor.style.color = "#3a7bfd";
        }

        break;

      case 'active':
        if (!todo.classList.contains("finished") || todo.id == 'footer') {
          todo.style.display = "flex";
          stateColor.style.color = "#3a7bfd";
        } else {
          todo.style.display = "none";
        }

        break;

      case 'completed':
        if (todo.classList.contains("finished") || todo.id == 'footer') {
          todo.style.display = "flex";
          stateColor.style.color = "#3a7bfd";
        } else {
          todo.style.display = "none";
        }

        break;
    }
  });
} //Displaying Delete Btn on mouseover


function stylingTask() {
  //Loop throught tasks
  _toConsumableArray(tasksContainer.children).forEach(function (task) {
    if (task.classList.contains("task")) {
      task.addEventListener("mouseover", function () {
        //Displaying The invisible items
        _toConsumableArray(task.children).forEach(function (el) {
          if (el.classList.contains("delete")) {
            el.style.display = "flex";
          }
        });
      });
      task.addEventListener("mouseout", function () {
        _toConsumableArray(task.children).forEach(function (el) {
          el.classList.contains("delete") ? el.style.display = "none" : el;
        });
      });
    }
  });
}

stylingTask();