import "./styles.css"
import { createModal } from "./dialog"
import { Card } from "./card_constr"
import { populateStorage, refreshStorage, createCards } from "./card_create"

if (localStorage.length === 0) {
    populateStorage()
    console.log("It is 0")
} else {
    createCards()
}

createModal(document.body, document.querySelector(".show-button"), (name, age, job) => {
    refreshStorage(new Card(name, age, job))
    createCards()
})