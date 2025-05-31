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
    theDialog.close("cancel")
})

export { theDialog }