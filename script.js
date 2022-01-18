function toggleTheme() {
  const element = document.getElementById("hContain");
  element.classList.toggle("dark");
  const themeBtn = document.getElementById("themebtn");
  if (themeBtn.classList.contains("icon-sun")) {
    themeBtn.classList.replace("icon-sun", "icon-moon");
  } else if (themeBtn.classList.contains("icon-moon")) {
    themeBtn.classList.replace("icon-moon", "icon-sun");
  }
  
  const helement = document.getElementById("bContain");
  helement.classList.toggle("bContainer");
  
  } 

function newele(){

  

    }

