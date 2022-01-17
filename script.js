function toggleTheme() {
    const element = document.body;
    element.classList.toggle("dark");
  const themeBtn =document.getElementById("themebtn");
 
 
 
  if(themeBtn.classList.contains("icon-sun")) {
  themeBtn.classList.remove("icon-sun"),
  themeBtn.classList.add("icon-moon");
  }
  else if(themeBtn.classList.contains("icon-moon")){
  themeBtn.classList.remove("icon-moon") ,
  themeBtn.classList.add("icon-sun");
  }
}
