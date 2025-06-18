import "./styles.css"

const sidebarFullButton = document.querySelector(".sidebar-full .sidebar-icon")
const sidebarSmallButton = document.querySelector(".sidebar-small .sidebar-icon")

const sidebarFull = document.querySelector(".sidebar-full")
const sidebarSmall = document.querySelector(".sidebar-small")

sidebarFullButton.addEventListener("click", () => {
    sidebarFull.classList.add("hide")
    sidebarSmall.classList.remove("hide")
})

sidebarSmallButton.addEventListener("click", () => {
    sidebarFull.classList.remove("hide")
    sidebarSmall.classList.add("hide")
})