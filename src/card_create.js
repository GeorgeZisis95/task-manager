import { createModal } from "./dialog"

function populateStorage() {
    localStorage.setItem("DefaultTasks", JSON.stringify([]))
    createCards()
}

function refreshStorage(card) {
    // I populate here as well, because if I clear LocalStorage and don't refresh the page it throws an error
    if (localStorage.length === 0) {
        populateStorage()
    }
    const oldArray = JSON.parse(localStorage.getItem("DefaultTasks"))
    const newArray = [...oldArray, card]
    localStorage.setItem("DefaultTasks", JSON.stringify(newArray))
}

function createCards() {
    const cardContainer = document.querySelector(".DefaultTasks-container")
    cardContainer.replaceChildren()
    cardContainer.textContent = "Default Tasks"
    let theArray = JSON.parse(localStorage.getItem("DefaultTasks"))
    if (theArray.length === 0) {
        return
    }
    theArray.map((card) => {
        const cardDiv = getCard(theArray, card)
        cardContainer.appendChild(cardDiv)
    })
}

function getCard(theArray, card) {
    const cardDiv = Object.assign(document.createElement("div"), {
        className: "card",
        textContent: [card.name, card.age, card.job]
    })
    const editButton = Object.assign(document.createElement("button"), {
        className: "edit-button",
        textContent: "Edit Task"
    })
    cardDiv.appendChild(editButton)
    createModal(cardDiv, editButton, (array) => {
        [card.name, card.age, card.project] = array
        localStorage.setItem("DefaultTasks", JSON.stringify(theArray))
        cardDiv.textContent = [card.name, card.age, card.project]
        createCards()
    }, false)
    const moveButton = Object.assign(document.createElement("button"), {
        className: "move-button",
        textContent: "Move to Project"
    })
    moveButton.addEventListener("click", () => {
        const projectName = prompt("Move to which project?")
        const existingProjects = Object.keys(localStorage)
        if (existingProjects.includes(projectName)) {
            document.querySelector(`.${projectName}-container`).appendChild(cardDiv)
        } else {
            localStorage.setItem(projectName, JSON.stringify([]))
            const newDiv = Object.assign(document.createElement("div"), {
                className: `${projectName}-container`,
                textContent: `${projectName}`
            })
            newDiv.appendChild(cardDiv)
            document.body.appendChild(newDiv)
        }
        card = moveBetweenProjects(card.project, projectName, card.id)
    })
    cardDiv.appendChild(moveButton)
    const removeButton = Object.assign(document.createElement("button"), {
        className: "remove-button",
        textContent: "Remove Task"
    })
    removeButton.dataset.id = card.id
    removeButton.addEventListener("click", () => {
        theArray = theArray.filter((item) => item.id !== removeButton.dataset.id)
        localStorage.setItem("DefaultTasks", JSON.stringify(theArray))
        cardDiv.remove()
    })
    cardDiv.appendChild(removeButton)
    return cardDiv
}

function moveBetweenProjects(oldProjectName, newProjectName, id) {
    const oldProjectArray = JSON.parse(localStorage.getItem(oldProjectName))
    const index = oldProjectArray.findIndex(card => card.id === id)
    const theItem = oldProjectArray[index]
    console.log(theItem)
    oldProjectArray.splice(index, 1)
    const newProjectArray = JSON.parse(localStorage.getItem(newProjectName))
    theItem.project = newProjectName
    newProjectArray.push(theItem)
    localStorage.setItem(oldProjectName, JSON.stringify(oldProjectArray))
    localStorage.setItem(newProjectName, JSON.stringify(newProjectArray))
    return theItem
}

export { populateStorage, refreshStorage, createCards, getCard }