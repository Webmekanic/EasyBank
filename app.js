const hamburger = document.querySelector(".hamburger")
const menuCollection = document.querySelector(".menuCollection")
console.log(hamburger)

hamburger.addEventListener("click", openMenu)

function openMenu() {
  console.log("clicked....")
  menuCollection.classList.toggle("active")

  if (menuCollection.classList.contains("header__nav-active")) {
    document.querySelector(".yourAnotherImg").src =
      "some/path/to/anotherImg.svg"
  } else {
    document.querySelector(".yourBrandLogoImg").src =
      "some/path/to/yourLogo.svg"
  }

  // nav.classList.toggle("active")
  // btn.classList.toggle("active")

  // if (nav.classList.contains("active")) {
  //   btn.textContent = "X"
  // } else {
  //   btn.textContent = "☰"
  // }
}
