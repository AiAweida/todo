function toggleTheme() {
  const themeBtn = document.getElementById("themebtn");
  if (themeBtn.classList.contains("Icon-Sun")) {
    themeBtn.classList.replace("Icon-Sun", "Icon-Moon");
  } else if (themeBtn.classList.contains("Icon-Moon")) {
    themeBtn.classList.replace("Icon-Moon", "Icon-Sun");
  }
  const helement = document.getElementById("bContain");
  helement.classList.toggle("Dark");
}

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
    Chk.type = "checkbox";
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
