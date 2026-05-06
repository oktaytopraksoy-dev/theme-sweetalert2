const buttonContainerElement = document.querySelector(".button-container")
const themeButtonElement = document.querySelector(".theme-button")
const bodyElement = document.querySelector("body")

let theme 

let myModals = [{  
  title: "The Internet?",
  text: "That thing is still around?",
  icon: "question",
},
{
  icon: "error",
  title: "Oops...",
  text: "Something went wrong!",
  footer: "Why do I have this issue?",
},
{
  title: "Drag me!",
  icon: "success",
  draggable: true,
}]


const saved = localStorage.getItem("theme")

if(saved) {
  theme = saved
} else {
  theme = "light"
}

themeButtonElement.textContent = theme == "light" ? "🔆" : "🌓"
localStorage.setItem("theme", theme)

if (theme === "dark") {
  bodyElement.classList.add("night")
} else {
  bodyElement.classList.remove("night")
}


myModals.forEach(element => {
  generate(element)
});

function generate(element) {
  const modalElement = document.createElement("button")
  modalElement.classList.add("modal-button")
  modalElement.textContent = element.title
  modalElement.onclick = () => openModal(element);

  buttonContainerElement.appendChild(modalElement)

  console.log(modalElement)
}

function openModal(element) {
  Swal.fire({
    title: element.title,
    text: element.text,
    icon: element.icon,
    footer: element.footer,
    draggable: element.draggable,
    theme
  });

}

function changeTheme() {
  if (theme === "light") {
    themeButtonElement.textContent = "🌓"
    theme = "dark"
    bodyElement.classList.add("night")
  } else {
    themeButtonElement.textContent = "🔆"
    theme = "light"
    bodyElement.classList.remove("night")
  }

  localStorage.setItem("theme", theme)
}




