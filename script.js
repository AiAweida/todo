var regx = /^([a-zA-Z]|[0-9]|[a-z0-9])+$/gi;
function newElement() {
  const itemlist = document.createElement("li");
  itemlist.className = "Li_Layout";
  itemlist.id = "ListItem";
  let inputValue = document.getElementById("todoList").value.trim();
  let textinput = document.createTextNode(inputValue);
  inputValue = inputValue.replace(regx, "");
  itemlist.appendChild(textinput);
  if (inputValue === "") {
    alert("please fill the text box with letters ");
  } else {
    document.getElementById("unorderedList").appendChild(itemlist);
    const deleted = document.createElement("span");
    deleted.className = "Delete__Btn";
    itemlist.appendChild(deleted);
    deleted.addEventListener("click", deleteItem);
    const Checked = document.createElement("span");
    Checked.className = "Check__Btn";
    Checked.id = "checkedButton";
    itemlist.appendChild(Checked);
    Checked.addEventListener("click", checkItem);
    itemlist.addEventListener("click", checklist);
  }
  document.getElementById("todoList").value = "";
}
function deleteItem(event) {
  event.target.parentElement.remove();
}
function checkItem(event) {
  event.target.parentElement.classList.toggle("lined");
  event.target.classList.toggle("clicked");
}
const keypressed = document.getElementById("todoList");
keypressed.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    newElement();
  }
});
const mouseclick = document.getElementById("themebtn");
const bodylayout = document.getElementById("bContain");
mouseclick.addEventListener("click", (event) => {
  event.target.classList.toggle("Sun");
  bodylayout.classList.toggle("Dark");
});
const clearcompleted = document.getElementById("clearButton");
clearcompleted.addEventListener("click", (event) => {
  let completeditems = document.getElementsByClassName("lined");
  while (completeditems.length > 0) {
    completeditems.item(0).remove();
  }
});

function checklist(event) {
  if (event.target.id == "ListItem") {
    event.target.classList.toggle("lined");
    event.target.childNodes[2].classList.toggle("clicked");
  }
}
