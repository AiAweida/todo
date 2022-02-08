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
  const inputValue = document.getElementById("myInput").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("please fill the text box with letters ");
  } else {
    document.getElementById("UnList").appendChild(li);
    const del = document.createElement("span");
    del.className = "Del__Btn";
    li.appendChild(del);
    del.addEventListener("click", deleteItem);
    let Chk = document.createElement("input");
    Chk.type = "checkbox";
    Chk.className = "Chk__Btn";
    Chk.id = "hkBtn";
    Chk.addEventListener("click", checkItem);
    li.appendChild(Chk);
  }
  document.getElementById("UnList").value = "";
}

function deleteItem(event) {
  event.target.parentElement.remove();
}
function checkItem(event) {}
