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
}
function newele() { }
