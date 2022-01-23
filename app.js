const hamburger = document.querySelector(".hamburger")
const menuCollection = document.querySelector(".menuCollection")
console.log(hamburger)

hamburger.addEventListener("click", openMenu)

function openMenu() {
  menuCollection.classList.toggle("active")

  if (menuCollection.classList.contains("active")) {
    hamburger.src = "./images/icon-close.svg"
  } else {
    hamburger.src = "./images/icon-hamburger.svg"
  }
}
