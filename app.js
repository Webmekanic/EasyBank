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

// Javascript codes which handles animation on scroll
const fadeIn = document.querySelectorAll(".fadeIn")
const slideIn = document.querySelectorAll(".slideIn")

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -250px 0px",
}

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add("appear")
      appearOnScroll.unobserve(entry.target)
    }
  })
},
appearOptions)

fadeIn.forEach((fadeIn) => {
  appearOnScroll.observe(fadeIn)
})

slideIn.forEach((slideIn) => {
  appearOnScroll.observe(slideIn)
})
