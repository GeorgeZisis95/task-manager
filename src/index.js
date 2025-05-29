import "./styles.css";

function Card(title, description, dueDate, priority, notes, isCheck) {
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes
    this.isCheck = isCheck
}

const task = new Card("Clean House", "Clean the rooms and the toilet", 17, 1, "Some notes go here", false)
Card.prototype.foo = function () {
    return this
}
console.log(task.foo())

const theInput = document.querySelector("input")
const theDialog = document.querySelector("dialog")
const theOutput = document.querySelector("output")
const showButton = document.querySelector(".show-button")
const cancelButton = document.querySelector(".cancel-button")
const confirmButton = document.querySelector(".confirm-button")

showButton.addEventListener("click", () => {
    theDialog.showModal()
})

theDialog.addEventListener("close", () => {
    theOutput.value = theDialog.returnValue === "" ? "No return value" : `Return value ${theDialog.returnValue}`
})

theDialog.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault()
        theDialog.close(theInput.value)
    }
})

confirmButton.addEventListener("click", (event) => {
    event.preventDefault()
    theDialog.close(theInput.value)
})

cancelButton.addEventListener("click", () => {
    theDialog.close()
})