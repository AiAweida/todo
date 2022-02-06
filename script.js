function toggleTheme() {
  
  const themeBtn = document.getElementById("themebtn");
  if (themeBtn.classList.contains("Icon-Sun")) {
    themeBtn.classList.replace("Icon-Sun", "Icon-Moon");
  } else if (themeBtn.classList.contains("Icon-Moon")) {
    themeBtn.classList.replace("Icon-Moon", "Icon-Sun");
  }
  const helement = document.getElementById("bContain");
  helement.classList.toggle("Dark");
  const ielement = document.getElementById("myInput");
  ielement.classList.toggle("Dark")
  const btnadd = document.getElementById("AddBtn");
  btnadd.classList.toggle("Dark");

  
}

function newElement() {
  const li = document.createElement("li");
  li.className=("Li_Layout");
  const inputValue = document.getElementById("myInput").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue =='') {
    alert("please fill the text box with letters ");
  } else {
    document.getElementById("UnList").appendChild(li);
  }
  document.getElementById("myInput").value = "";
}
