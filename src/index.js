import "./styles.css";
import { theDialog } from "./dialog";

function Card(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
}

theDialog.addEventListener("close", () => {
    if (theDialog.returnValue !== "cancel") {
        const [name, age, job] = JSON.parse(theDialog.returnValue)
        refreshStorage(new Card(name, age, job))
        createCards()
    }
})

if (localStorage.length === 0) {
    populateStorage()
    console.log("It is 0")
} else {
    createCards()
}

function populateStorage() {
    localStorage.setItem("defaultTasks", JSON.stringify([]))
    createCards()
}

function refreshStorage(card) {
    const oldArray = JSON.parse(localStorage.getItem("defaultTasks"))
    const newArray = [...oldArray, card]
    localStorage.setItem("defaultTasks", JSON.stringify(newArray))
}

function createCards() {
    const cardContainer = document.querySelector(".card-container")
    cardContainer.replaceChildren()
    let theArray = JSON.parse(localStorage.getItem("defaultTasks"))
    if (theArray.length === 0) {
        return
    }
    theArray.map((card) => {
        const cardDiv = Object.assign(document.createElement("div"), {
            className: "card",
            textContent: card.name
        })
        const removeButton = Object.assign(document.createElement("button"), {
            className: "remove-button",
            textContent: "Remove Task"
        })
        removeButton.dataset.id = card.name
        removeButton.addEventListener("click", () => {
            theArray = theArray.filter((item) => item.name !== removeButton.dataset.id)
            localStorage.setItem("defaultTasks", JSON.stringify(theArray))
            cardDiv.remove()
        })
        cardDiv.appendChild(removeButton)
        cardContainer.appendChild(cardDiv)
    })
}