function createModal(container, showButton, submitLogic, project) {
    let dialogBox = document.body.querySelector("dialog")
    if (container !== document.body && !project) {
        dialogBox = document.body.querySelector("dialog").cloneNode(true)
        container.appendChild(dialogBox)
    }
    if (project) {
        dialogBox = document.body.querySelector(".new-project")
    }

    const theInputs = Array.from(dialogBox.querySelectorAll("input"))
    const cancelButton = dialogBox.querySelector(".cancel-button")
    const confirmButton = dialogBox.querySelector(".confirm-button")

    showButton.addEventListener("click", () => {
        dialogBox.showModal()
    })

    dialogBox.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault()
            dialogBox.close(JSON.stringify(theInputs.map((e) => e.value)))
        }

        if (event.key === "Escape") {
            dialogBox.close("cancel")
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
            const array = JSON.parse(dialogBox.returnValue)
            submitLogic(array)
        }
    })
}

export { createModal }