
// Variables
let todoInput = document.querySelector(".textPart");
let todoBox = document.querySelector(".tasklist");
let todoButton = document.querySelector(".add");
let toDelete = document.querySelector(".tasklist");
let clearAllButton = document.querySelector(".clear");
let count = 0;

modifyTaskNumber();


// Methods
todoInput.onkeyup = ()=>{
  let userEnteredValue = todoInput.value; 
  if(userEnteredValue.trim() != 0){ 
    todoButton.classList.add("active"); 
  }else{
    todoButton.classList.remove("active"); 
  }
}


// Event Listeners
todoButton.addEventListener("click", function addMore() {
  let ans = todoInput.value;
  todoButton.classList.add("active");
  let li = document.createElement("li");
  li.classList.add("tasks");
  // li.textContent = ans;
  li.innerHTML = `${ans}<span class="delete">🗑</span>`;
    todoBox.appendChild(li);
    count++;
    todoInput.value = "";
    modifyTaskNumber();
    todoButton.classList.remove("active"); 
  })
  
  
  toDelete.addEventListener("click", function DeleteOne(event) {
    let li = event.target.parentNode;
    li.remove();
    count--;
    modifyTaskNumber();
  })
  
  
  clearAllButton.addEventListener("click", function DeleteAll(event) {
    while(todoBox.lastChild !== null)
    todoBox.lastChild.remove();
    
    count = 0;  
    modifyTaskNumber();
  })


  // Functions
  function modifyTaskNumber()
  {
    let tasksLeft = document.querySelector(".pendingTasks");
    tasksLeft.textContent = count;
  }