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

createModal(document.body, document.querySelector(".project-button"), (array) => {
    console.log(array)
}, true)