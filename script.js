function newElement() {
  const itemlist = document.createElement("li");
  itemlist.className = "Li_Layout";
  itemlist.id = "ListItem";
  const inputValue = document.getElementById("todoList").value.trim();
  const txt = document.createTextNode(inputValue);
  itemlist.appendChild(txt);
  if (inputValue === "") {
    alert("please fill the text box with letters ");
  } else {
    document.getElementById("unorderedList").appendChild(itemlist);
    const deleted = document.createElement("span");
    deleted.className = "Delete__Btn";
    itemlist.appendChild(deleted);
    deleted.addEventListener("click", deleteItem);
    let Checked = document.createElement("span");
    Checked.className = "Check__Btn";
    itemlist.appendChild(Checked);
    Checked.addEventListener("click", checkItem);
  }
  document.getElementById("todoList").value = "";
}

function deleteItem(event) {
  event.target.parentElement.remove();
}
function checkItem(event) {
  event.target.parentElement.classList.toggle("lined");
  event.target.classList.toggle("clicked");
  if (event.target.parentElement.id == "checked") {
    event.target.parentElement.id = "ListItem";
  } else {
    event.target.parentElement.id = "checked";
  }
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
