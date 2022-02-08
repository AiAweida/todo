function newElement() {
  const li = document.createElement("li");
  li.className = "Li_Layout";
  li.id = "ListItem";
  const inputValue = document.getElementById("myInput").value.trim();
  const txt = document.createTextNode(inputValue);
  li.appendChild(txt);
  if (inputValue === "") {
    alert("please fill the text box with letters ");
  } else {
    document.getElementById("UnList").appendChild(li);
    const del = document.createElement("span");
    del.className = "Del__Btn";
    li.appendChild(del);
    del.addEventListener("click", deleteItem);
    let Chk = document.createElement("span");
    Chk.className = "Chk__Btn";
    li.appendChild(Chk);
    Chk.addEventListener("click", checkItem);
  }
  document.getElementById("myInput").value = "";
}

function deleteItem(event) {
  event.target.parentElement.remove();
}
function checkItem(event) {
  event.target.parentElement.classList.toggle("lined");
  event.target.classList.toggle("clicked");
}
const kp = document.getElementById("myInput");
kp.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    newElement();
  }
});
const mn = document.getElementById("themebtn");
const bl = document.getElementById("bContain");
mn.addEventListener("click", (event) => {
  event.target.classList.toggle("Sun");
  bl.classList.toggle("Dark");
});
function clearlist() {
  var myList = document.getElementById("UnList");
  myList.innerHTML = "";
}
