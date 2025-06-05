import "./styles.css"
import { createModal } from "./dialog"
import { Card } from "./card_constr"
import { populateStorage, refreshStorage, createCards } from "./card_create"

if (localStorage.length === 0) {
    populateStorage()
} else {
    createCards()
}

createModal(document.body, document.querySelector(".show-button"), (array) => {
    refreshStorage(new Card(array[0], array[1], array[2]))
    createCards()
}, false)

for (const key of Object.keys(localStorage)) {
    if (key === "DefaultTasks") {
        continue
    }
    const newDiv = Object.assign(document.createElement("div"), {
        className: `${key}-container`,
        textContent: `${key}`
    })
    document.body.appendChild(newDiv)
}

createModal(document.body, document.querySelector(".project-button"), (array) => {
    // Might make this into separate function
    localStorage.setItem(array[0], JSON.stringify([]))

    const newDiv = Object.assign(document.createElement("div"), {
        className: `${array[0]}-container`,
        textContent: `${array[0]}`
    })
    document.body.appendChild(newDiv)
}, true)