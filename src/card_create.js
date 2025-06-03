import { createModal } from "./dialog"

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
            textContent: [card.name, card.age, card.job]
        })
        const editButton = Object.assign(document.createElement("button"), {
            className: "edit-button",
            textContent: "Edit Task"
        })
        cardDiv.appendChild(editButton)
        createModal(cardDiv, editButton, (name, age, job) => {
            [card.name, card.age, card.job] = [name, age, job]
            localStorage.setItem("defaultTasks", JSON.stringify(theArray))
            cardDiv.textContent = [card.name, card.age, card.job]
            createCards()
        })
        const removeButton = Object.assign(document.createElement("button"), {
            className: "remove-button",
            textContent: "Remove Task"
        })
        removeButton.dataset.id = card.id
        removeButton.addEventListener("click", () => {
            theArray = theArray.filter((item) => item.id !== removeButton.dataset.id)
            localStorage.setItem("defaultTasks", JSON.stringify(theArray))
            cardDiv.remove()
        })
        cardDiv.appendChild(removeButton)
        cardContainer.appendChild(cardDiv)
    })
}

export { populateStorage, refreshStorage, createCards }