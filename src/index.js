import "./styles.css"

const sidebarFullButton = document.querySelector(".sidebar-full .sidebar-icon")
const sidebarSmallButton = document.querySelector(".sidebar-small .sidebar-icon")

const sidebarFull = document.querySelector(".sidebar-full")
const sidebarSmall = document.querySelector(".sidebar-small")

sidebarFullButton.addEventListener("click", () => {
    toSidebarSmall()
})

sidebarSmallButton.addEventListener("click", () => {
    toSidebarFull()
})

const mediaQuery = window.matchMedia("(max-width:700px)")
if (mediaQuery.matches) {
    sidebarSmall.classList.remove("hide")
    sidebarFull.classList.add("hide")
}
mediaQuery.addEventListener("change", () => {
    if (mediaQuery.matches) {
        toSidebarSmall()
    } else {
        toSidebarFull()
    }
})

function toSidebarSmall() {
    sidebarFull.classList.add("move-left")
    sidebarSmall.classList.remove("hide")
    sidebarSmall.classList.remove("move-right")
}

function toSidebarFull() {
    sidebarFull.classList.remove("move-left")
    sidebarFull.classList.remove("hide")
    sidebarSmall.classList.add("move-right")
}