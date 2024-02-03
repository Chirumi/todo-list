function ui() {
    const container = document.querySelector(".container")
    
    const addToDoItem = document.createElement("button")
    addToDoItem.textContent = "Add To-do item"
    addToDoItem.addEventListener("click", () => {
        const form = document.createElement("form")

        const title = inputMaker("Title")
        const description = inputMaker("Description")

        form.appendChild(title)
        form.appendChild(description)
        container.appendChild(form)
    })

    container.appendChild(addToDoItem)
}

function inputMaker(input) {
    const inputContainer = document.createElement("div")
    
    const label = document.createElement("div")
    label.for = input
    label.textContent = input

    const textBox = document.createElement("input")
    textBox.type = input
    textBox.id = input
    textBox.name = input

    inputContainer.appendChild(label)
    inputContainer.appendChild(textBox)

    return inputContainer
}

export default ui()