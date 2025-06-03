function createModal(container, showButton, submitLogic) {
    let dialogBox = document.body.querySelector("dialog")
    if (container !== document.body) {
        dialogBox = document.body.querySelector("dialog").cloneNode(true)
        container.appendChild(dialogBox)
    }

    const theInputs = Array.from(container.querySelectorAll(".base-input"))
    const cancelButton = container.querySelector(".cancel-button")
    const confirmButton = container.querySelector(".confirm-button")

    showButton.addEventListener("click", () => {
        dialogBox.showModal()
    })

    dialogBox.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault()
            dialogBox.close(JSON.stringify(theInputs.map((e) => e.value)))
        }
    })

    confirmButton.addEventListener("click", (event) => {
        event.preventDefault()
        dialogBox.close(JSON.stringify(theInputs.map((e) => e.value)))
    })

    cancelButton.addEventListener("click", () => {
        dialogBox.close("cancel")
    })

    dialogBox.addEventListener("close", () => {
        if (dialogBox.returnValue !== "cancel") {
            const [name, age, job] = JSON.parse(dialogBox.returnValue)
            submitLogic(name, age, job)
        }
    })
}
export { createModal }