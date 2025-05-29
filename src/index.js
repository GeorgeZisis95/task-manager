import "./styles.css";

function Card(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
}

const theInputs = Array.from(document.querySelectorAll("input"))
const theDialog = document.querySelector("dialog")
const showButton = document.querySelector(".show-button")
const cancelButton = document.querySelector(".cancel-button")
const confirmButton = document.querySelector(".confirm-button")

showButton.addEventListener("click", () => {
    theDialog.showModal()
})

theDialog.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault()
        theDialog.close(JSON.stringify(theInputs.map((e) => e.value)))
    }
})

confirmButton.addEventListener("click", (event) => {
    event.preventDefault()
    theDialog.close(JSON.stringify(theInputs.map((e) => e.value)))
})

cancelButton.addEventListener("click", () => {
    theDialog.close()
})

theDialog.addEventListener("close", () => {
    const [name, age, job] = JSON.parse(theDialog.returnValue)
    refreshStorage(new Card(name, age, job))
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
    const defaultCards = JSON.parse(localStorage.getItem("defaultTasks"))
}