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
  li.className = ("Li_Layout");
  li.id=("ListItem")
  const inputValue = document.getElementById("myInput").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue == '') {
    alert("please fill the text box with letters ");
  } else {
    document.getElementById("UnList").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  let del=document.createElement("span");
  
  del.className=("Del__Btn");
  li.appendChild(del);
 let dx=document.getElementsByClassName("Del__Btn");
 let i;
  for(i=0;i < dx.length;i++){
  dx[i].onclick = function(){
    let dx=this.parentElement;
    dx.style.display="none";
  }
  }
  let Chk=document.createElement("span");
  
  Chk.className=("Chk__Btn");
  li.appendChild(Chk);
 let cx=document.getElementsByClassName("Chk__Btn");
 cx=this.parentElement;
}
  
