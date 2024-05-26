const create = document.querySelector(".create");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const listHero = document.querySelector(".hero-list");
const heroListOne = document.querySelector('.hero-list-one')
const readbtn = document.querySelector('.readContact')
const btnX = document.querySelector('.btn-x')



heroListOne.style.display = 'none'
function view() {
  listHero.innerHTML = "";
  let task = JSON.parse(localStorage.getItem("todo")) || [];
  task.map((el) => {
    listHero.innerHTML += `
        
        <div class='trList'>
        <div class="imgdiv">
        <img src="${el.url}" alt="img">
        </div>
        <div class="textList">
        <tx>name:${el.name}</tx> 
        <tx>email:${el.email} </tx>
        </div>
        
        
        <button class=" del-btn btn btn-danger">Delete!</button>
        
        </div>
          `;
    input1.value = "";
    input2.value = "";
    input3.value = "";
  });
  delLocal();
}
view();

function addTodo() {
  if (
    (input1.value.trim() === "",
    input2.value.trim() === "",
    input3.value.trim() === "")
  ) {
    alert(404);
  } else {
    let task = JSON.parse(localStorage.getItem("todo")) || [];
    let newTodo = {
      // id: task.length ? task[task.length - 1].id + 1 : 1,
      name: input1.value,
      email: input2.value,
      url: input3.value,
    };
    let result = [...task, newTodo];
    localStorage.setItem("todo", JSON.stringify(result));
    view();
  }
}
create.addEventListener("click", () => {
  addTodo();
  view();
});
btnX.addEventListener('click', () => {
  heroListOne.style.display = 'none'
})
readbtn.addEventListener('click', () => {
  heroListOne.style.display = 'block'
})
input1.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
input2.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
input3.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
view();
function delLocal() {
  let task = JSON.parse(localStorage.getItem("todo")) || [];
  let buttons = document.querySelectorAll(".del-btn");
  buttons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      task = task.filter((el, idx) => {
        return index !== idx;
      });
      localStorage.setItem("todo", JSON.stringify(task));
      view();
    });
  });
}
delLocal();
