import "./styles.css";

const taskArray = []

function Card(name, age, job) {
    this.name = name
    this.age = age
    this.job = job
}

const task = new Card("Nicolas", 12, "Engineer")
taskArray.push(task)

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
    taskArray.push(new Card(name, age, job))
})
