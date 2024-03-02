import ToDoList from "./toDoList"
import "./style.css"
import accIcon from "./images/account.svg"
import inboxIcon from "./images/inbox.svg"
import todayIcon from "./images/calendar-today.svg"
import weekIcon from "./images/calendar-week.svg"
import { format, compareAsc } from "date-fns"

let inbox = []
let today = []
let week = []
let currentArr = [inbox]
const projectsArr = [inbox, today, week]

const container = document.querySelector(".container")
const sideBarItems = document.querySelector(".sideBarItems")
const dueBy = document.querySelector(".dueBy")
const addTaskBtn = document.querySelector(".addTaskBtn")
const projectHeader = document.querySelector(".projectHeader")

function profile() {
    const profDiv = document.createElement("div")
    profDiv.classList.add("profDiv")
    const profPic = new Image()
    profPic.src = accIcon
    profPic.classList.add("profPic")
    const profName = document.createElement("h1")
    profName.textContent = "Michiru"
    profName.classList.add("profName")

    profDiv.appendChild(profPic)
    profDiv.appendChild(profName)
    sideBarItems.prepend(profDiv)
}
profile()

function initialInbox() {
    const inboxDiv = document.createElement("li")
    const inboxName = document.createElement("div")
    inboxName.textContent = "Inbox"
    const inboxPic = new Image()
    inboxPic.src = inboxIcon

    inboxDiv.addEventListener("click", () => {
        eraseDOM(container)
        currentArr = []
        today = []
        currentArr.push(inbox)
        repopulateDOM(inbox)
        document.querySelector(".addTaskBtn").style.display = "flex"
        projectHeader.textContent = "Inbox"
    })
    // Open "Inbox" project on load
    eraseDOM(container)
    currentArr = []
    today = []
    currentArr.push(inbox)
    repopulateDOM(inbox)
    document.querySelector(".addTaskBtn").style.display = "flex"
    projectHeader.textContent = "Inbox"

    inboxDiv.appendChild(inboxPic)
    inboxDiv.appendChild(inboxName)
    dueBy.appendChild(inboxDiv)
}
initialInbox()

function todayFilter() {
    const todayFilterDiv = document.createElement("li")
    const todayFilterName = document.createElement("div")
    todayFilterName.textContent = "Today"
    const todayFilterPic = new Image()
    todayFilterPic.src = todayIcon
    
    todayFilterDiv.addEventListener("click", () => {
        today = []
        // Push toDo objects that have dueDate == currentDate into today array
        let currentDate = new Date().toISOString().split("T")[0]

        for (let x = 0; x < projectsArr.length; x++) {
            for (let y = 0; y < projectsArr[x].length; y++) {
                if (projectsArr[x][y].dueDate == currentDate) {
                    today.push(projectsArr[x][y])
                    projectsArr[x][y].filter = "today"
                }
            }
        }

        eraseDOM(container)
        currentArr = []
        currentArr.push(today)
        repopulateDOM(today)
        document.querySelector(".addTaskBtn").style.display = "none"
        projectHeader.textContent = "Today"
    })

    todayFilterDiv.appendChild(todayFilterPic)
    todayFilterDiv.appendChild(todayFilterName)
    dueBy.appendChild(todayFilterDiv)
}
todayFilter()

function weekFilter() {
    const weekFilterDiv = document.createElement("li")
    const weekFilterName = document.createElement("div")
    weekFilterName.textContent = "This week"
    const weekPic = new Image()
    weekPic.src = weekIcon
    
    weekFilterDiv.addEventListener("click", () => {
        week = []

        let currentDate = new Date()
        let weekAfterCurrentDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]

        for (let x = 0; x < projectsArr.length; x++) {
            for (let y = 0; y < projectsArr[x].length; y++) {
                if (projectsArr[x][y].dueDate >= currentDate.toISOString().split("T")[0] && projectsArr[x][y].dueDate <= weekAfterCurrentDate) {
                    week.push(projectsArr[x][y])
                    projectsArr[x][y].filter = "week"
                }
            }
        }

        eraseDOM(container)
        currentArr = []
        currentArr.push(week)
        repopulateDOM(week)
        document.querySelector(".addTaskBtn").style.display = "none"
        projectHeader.textContent = "This week"
    })

    weekFilterDiv.appendChild(weekPic)
    weekFilterDiv.appendChild(weekFilterName)
    dueBy.appendChild(weekFilterDiv)
}
weekFilter()

function ui() {
    const myProjectsDiv = document.createElement("div")
    myProjectsDiv.classList.add("myProjectsDiv")

    const myProjects = document.createElement("div")
    myProjects.textContent = "My Projects"

    const addProject = document.createElement("button")
    addProject.textContent = "+"
    addProject.classList.add("addProject")
    addProject.addEventListener("click", () => {
        let project = []
        projectsArr.push(project)

        const addProjDialog = document.createElement("dialog")
        addProjDialog.addEventListener("click", () => {
            container.removeChild(addProjDialog)
        })

        const addProjContainer = document.createElement("div")
        addProjContainer.addEventListener("click", (e) => {
            e.stopPropagation()
        })

        const addProjForm = document.createElement("form")
        const projectNameTitle = document.createElement("h3")
        projectNameTitle.textContent = "Add project"
        projectNameTitle.classList.add("formHeader")
        const projectName = document.createElement("input")
        const submitProjectName = document.createElement("button")
        submitProjectName.textContent = "Add"
        submitProjectName.addEventListener("click", (e) => {
            e.preventDefault()
            if (projectName.value.length != 0) {

                const newProjectContainer = document.createElement("div")
                newProjectContainer.classList.add("newProject")
                const newProject = document.createElement("button")
                newProject.textContent = projectName.value
                newProject.classList.add("newProjectName")

                const removeProject = document.createElement("button")
                removeProject.textContent = "x"
                removeProject.classList.add("newProjectRemove")
                removeProject.addEventListener("click", () => {
                    eraseDOM(container)
                    project.push("TO REMOVE")
                    removeProjectArr()
                    myProjectsDiv.removeChild(newProjectContainer)
                })
                
                newProject.addEventListener("click", () => {
                    eraseDOM(container)
                    currentArr = []
                    today = []
                    currentArr.push(project)
                    repopulateDOM(project)
                    document.querySelector(".addTaskBtn").style.display = "flex"
                    projectHeader.textContent = projectName.value
                })

                // REDIRECT TO NEW PROJECT
                eraseDOM(container)
                currentArr = []
                today = []
                currentArr.push(project)
                repopulateDOM(project)
                document.querySelector(".addTaskBtn").style.display = "flex"
                projectHeader.textContent = projectName.value

                newProjectContainer.appendChild(newProject)
                newProjectContainer.appendChild(removeProject)
                myProjectsDiv.appendChild(newProjectContainer)
            }
            else {
                alert("Please type the new project's name!")
            }
                
        })

        addProjForm.appendChild(projectNameTitle)
        addProjForm.appendChild(projectName)
        addProjForm.appendChild(submitProjectName)
        addProjContainer.appendChild(addProjForm)
        addProjDialog.appendChild(addProjContainer)
        container.appendChild(addProjDialog)
        addProjDialog.showModal()
    })
    
    const addToDoItem = document.createElement("button")
    addToDoItem.textContent = "+"
    addToDoItem.classList.add("addToDoItem")
    addToDoItem.addEventListener("click", () => {
        const makeForm = toDoForm()
        container.appendChild(makeForm)
        document.querySelector(".addTaskDialog").showModal()
        addTaskBtn.style.display = "none"

        let currentDate = new Date().toISOString().split("T")[0]
        document.getElementById("dueDate").min = currentDate
    })

    const div = document.createElement("div")
    div.appendChild(myProjects)
    div.appendChild(addProject)
    
    myProjectsDiv.appendChild(div)
    sideBarItems.appendChild(myProjectsDiv)
    addTaskBtn.appendChild(addToDoItem)
}

function eraseDOM(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.lastChild)
    }
}

function inputMaker(input, type, idName) {
    const inputContainer = document.createElement("div")
    
    const label = document.createElement("div")
    label.for = input
    label.textContent = input

    const textBox = document.createElement("input")
    textBox.type = type
    textBox.id = idName
    textBox.name = input

    inputContainer.appendChild(label)
    inputContainer.appendChild(textBox)

    return inputContainer
}

function repopulateDOM(arr) {
    arr.forEach(e => {
        const checkBox = checkBoxMaker()
        checkBox.addEventListener("click", () => {
            const indexToRemove = arr.indexOf(e)
            arr.splice(indexToRemove, 1)

            // Remove todo item from source project when it is removed under "Today" filter
            if (arr == today) {
                for (let x = 0; x < projectsArr.length; x++) {
                    for (let y = 0; y < projectsArr[x].length; y++) {
                        if (projectsArr[x][y].filter == "today") {
                            projectsArr[x].splice(y, 1)
                        }
                    }
                }
            }
            if (arr == week) {
                for (let x = 0; x < projectsArr.length; x++) {
                    for (let y = 0; y < projectsArr[x].length; y++) {
                        if (projectsArr[x][y].filter == "week") {
                            projectsArr[x].splice(y, 1)
                        }
                    }
                }
            }
        })

        if (!(arr == today || arr == week)) {
            delete e.filter // Remove filter property used to delete todo items from projects when
        // they are deleted under "Today" filter tab
        }

        const itemContainer = document.createElement("div")
        itemContainer.classList.add("itemContainer")
        const itemDetails = document.createElement("div")
        itemDetails.classList.add("itemDetails")
        itemDetails.addEventListener("click", () => {
            const dialog = document.createElement("dialog")

            dialog.addEventListener("click", () => {
                container.removeChild(dialog)
            })

            const dialogFormContainer = document.createElement("div")
            dialogFormContainer.addEventListener("click", (e) => {
                e.stopPropagation()
            })

            const dialogForm = document.createElement("form")
            const dialogTitle = document.createElement("input")
            dialogTitle.value = e.title
            const dialogDesc = document.createElement("input")
            dialogDesc.value = e.description
            const dialogDueDate = document.createElement("input")
            dialogDueDate.type = "date"
            dialogDueDate.value = e.dueDate
            const dialogPriority = document.createElement("select")
            dialogPriority.value = e.priority

            const dialogPriorityOne = document.createElement("option")
            dialogPriorityOne.value = "High"
            dialogPriorityOne.textContent = "High"
            const dialogPriorityTwo = document.createElement("option")
            dialogPriorityTwo.value = "Medium"
            dialogPriorityTwo.textContent = "Medium"
            const dialogPriorityThree = document.createElement("option")
            dialogPriorityThree.value = "Low"
            dialogPriorityThree.textContent = "Low"

            if (e.priority == "High") {
                dialogPriorityOne.setAttribute("selected", "selected")
            }
            else if (e.priority == "Medium") {
                dialogPriorityTwo.setAttribute("selected", "selected")
            }
            else {
                dialogPriorityThree.setAttribute("selected", "selected")
            }

            const editBtn = document.createElement("button")
            editBtn.textContent = "Edit"
            editBtn.type = "button"
            editBtn.addEventListener("click", () => {
                e.title = dialogTitle.value
                itemTitle.textContent = e.title
        
                e.description = dialogDesc.value
                itemDesc.textContent = e.description
        
                e.dueDate = dialogDueDate.value
            })

            dialogPriority.appendChild(dialogPriorityOne)
            dialogPriority.appendChild(dialogPriorityTwo)
            dialogPriority.appendChild(dialogPriorityThree)

            dialogForm.appendChild(dialogTitle)
            dialogForm.appendChild(dialogDesc)
            dialogForm.appendChild(dialogDueDate)
            dialogForm.appendChild(dialogPriority)
            dialogForm.appendChild(editBtn)

            dialogFormContainer.appendChild(dialogForm)
            dialog.appendChild(dialogFormContainer)
            container.prepend(dialog)
            dialog.showModal()
        })

        const itemTitle = document.createElement("div")
        itemTitle.classList.add("previewTitle")
        itemTitle.textContent = e.title
        const itemDesc = document.createElement("div")
        itemDesc.classList.add("previewDesc")
        itemDesc.textContent = e.description
        const itemDueDate = document.createElement("div")
        itemDueDate.classList.add("previewDueDate")
        itemDueDate.textContent = e.dueDate

        if (e.priority == "High") {
            itemContainer.classList.add("priorityOne")
        }
        else if (e.priority == "Medium") {
            itemContainer.classList.add("priorityTwo")
        }
        else {
            itemContainer.classList.add("priorityThree")
        }
        
        itemDetails.appendChild(itemTitle)
        itemDetails.appendChild(itemDesc)
        itemDetails.appendChild(itemDueDate)
        itemContainer.appendChild(checkBox)
        itemContainer.appendChild(itemDetails)

        container.appendChild(itemContainer)
    });
}

function toDoForm() {
    const dialog = document.createElement("dialog")
    dialog.classList.add("addTaskDialog")
    dialog.addEventListener("click", () => {
        container.removeChild(dialog)
        addTaskBtn.style.display = "flex"
    })

    const formContainer = document.createElement("div")
    formContainer.addEventListener("click", (e) => {
        e.stopPropagation()
    })
    const form = document.createElement("form")

    const title = inputMaker("Title", "input", "title")
    const description = inputMaker("Description", "input", "description")
    const dueDate = inputMaker("Due date", "date", "dueDate")

    // Priority drop-down
    const priorityContainer = document.createElement("div")
    const priorityLabel = document.createElement("label")
    priorityLabel.for = "priority"
    priorityLabel.textContent = "Priority"
    const priority = document.createElement("select")
    priority.name = "priority"
    priority.id = "priority"
    
    const priorityOne = document.createElement("option")
    priorityOne.value = "High"
    priorityOne.textContent = "High"
    const priorityTwo = document.createElement("option")
    priorityTwo.value = "Medium"
    priorityTwo.textContent = "Medium"
    const priorityThree = document.createElement("option")
    priorityThree.value = "Low"
    priorityThree.textContent = "Low"

    priority.appendChild(priorityOne)
    priority.appendChild(priorityTwo)
    priority.appendChild(priorityThree)
    priorityContainer.appendChild(priorityLabel)
    priorityContainer.appendChild(priority)

    const submitBtn = document.createElement("button")
    submitBtn.classList.add("submitBtn")
    submitBtn.textContent = "Add"
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault()

        // Form validation
        if (document.getElementById("title").value.length != 0) {
            const newTask = new ToDoList(document.getElementById("title").value, document.getElementById("description").value, document.getElementById("dueDate").value, document.getElementById("priority").value)
            currentArr[0].push(newTask)

            document.querySelector(".addTaskBtn").style.display = "flex"
            submitBtn.style.display = "none"

            // Appends todo item to DOM
            const checkBox = checkBoxMaker()
            checkBox.addEventListener("click", () => {
                const indexToRemove = arr.indexOf(e)
                arr.splice(indexToRemove, 1)
            })
            const itemContainer = document.createElement("div")
            itemContainer.classList.add("itemContainer")
            if (document.getElementById("priority").value == "High") {
                itemContainer.classList.add("priorityOne")
            }
            else if (document.getElementById("priority").value == "Medium") {
                itemContainer.classList.add("priorityTwo")
            }
            else {
                itemContainer.classList.add("priorityThree")
            }
            const itemDetails = document.createElement("div")
            itemDetails.classList.add("itemDetails")
            itemDetails.addEventListener("click", () => {
                // Expand to-do item to edit/see
                const dialog = document.createElement("dialog")
                dialog.addEventListener("click", () => {
                    container.removeChild(dialog)
                })

                const dialogFormContainer = document.createElement("div")
                dialogFormContainer.addEventListener("click", (e) => {
                    e.stopPropagation()
                })

                const dialogForm = document.createElement("form")

                const itemHeader = document.createElement("h3")
                itemHeader.textContent = "Edit task"
                itemHeader.classList.add("formHeader")
                
                const dialogTitle = document.createElement("input")
                dialogTitle.value = itemTitle.textContent
                const dialogDesc = document.createElement("textarea")
                dialogDesc.value = itemDesc.textContent
                const dialogDueDate = document.createElement("input")
                dialogDueDate.type = "date"
                dialogDueDate.value = newTask.dueDate
                let currentDate = new Date().toISOString().split("T")[0]
                dialogDueDate.min = currentDate
                const dialogPriority = document.createElement("select")
                dialogPriority.value = priority.textContent

                const dialogPriorityOne = document.createElement("option")
                dialogPriorityOne.value = "High"
                dialogPriorityOne.textContent = "High"
                const dialogPriorityTwo = document.createElement("option")
                dialogPriorityTwo.value = "Medium"
                dialogPriorityTwo.textContent = "Medium"
                const dialogPriorityThree = document.createElement("option")
                dialogPriorityThree.value = "Low"
                dialogPriorityThree.textContent = "Low"

                if (newTask.priority == "High") {
                    dialogPriorityOne.setAttribute("selected", "selected")
                }
                else if (newTask.priority == "Medium") {
                    dialogPriorityTwo.setAttribute("selected", "selected")
                }
                else {
                    dialogPriorityThree.setAttribute("selected", "selected")
                }

                const editBtn = document.createElement("button")
                editBtn.textContent = "Edit"
                editBtn.type = "button"
                editBtn.addEventListener("click", () => {
                    if (dialogTitle.value.length != 0) {
                        newTask.title = dialogTitle.value
                        itemTitle.textContent = newTask.title

                        newTask.description = dialogDesc.value
                        itemDesc.textContent = newTask.description

                        newTask.dueDate = dialogDueDate.value

                        newTask.priority = dialogPriority.value
                        
                        if (newTask.priority == "High") {
                            itemContainer.style.borderRight = "3px solid orangered"
                        }
                        else if (newTask.priority == "Medium") {
                            itemContainer.style.borderRight = "3px solid orange"
                        }
                        else {
                            itemContainer.style.borderRight = "3px solid seagreen"
                        }

                        container.removeChild(dialog)
                    }
                    else {
                        alert("Please fill in the task's title!")
                    }
                })

                dialogPriority.appendChild(dialogPriorityOne)
                dialogPriority.appendChild(dialogPriorityTwo)
                dialogPriority.appendChild(dialogPriorityThree)
            
                dialogForm.appendChild(itemHeader)
                dialogForm.appendChild(dialogTitle)
                dialogForm.appendChild(dialogDesc)
                dialogForm.appendChild(dialogDueDate)
                dialogForm.appendChild(dialogPriority)
                dialogForm.appendChild(editBtn)

                dialogFormContainer.appendChild(dialogForm)
                dialog.appendChild(dialogFormContainer)
                container.prepend(dialog)
                dialog.showModal()
            })

            const itemTitle = document.createElement("div")
            itemTitle.classList.add("previewTitle")
            itemTitle.textContent = newTask.title
            const itemDesc = document.createElement("div")
            itemDesc.classList.add("previewDesc")
            itemDesc.textContent = newTask.description
            const itemDueDate = document.createElement("div")
            itemDueDate.classList.add("previewDueDate")
            itemDueDate.textContent = newTask.dueDate
        
            itemDetails.appendChild(itemTitle)
            itemDetails.appendChild(itemDesc)
            itemDetails.appendChild(itemDueDate)
            itemContainer.appendChild(checkBox)
            itemContainer.appendChild(itemDetails)

            document.getElementById("title").value = ""
            document.getElementById("description").value = ""
            document.getElementById("dueDate").value = ""
            document.getElementById("priority").value = ""

            container.appendChild(itemContainer)
            document.querySelector(".container").removeChild(dialog)
        }
        else {
            alert("Please fill in the title and due date cannot be earlier than today!")
        }
    })

    const addTaskHeader = document.createElement("h3")
    addTaskHeader.textContent = "Add task"
    addTaskHeader.classList.add("formHeader")

    form.appendChild(addTaskHeader)
    form.appendChild(title)
    form.appendChild(description)
    form.appendChild(dueDate)
    form.appendChild(priorityContainer)
    form.appendChild(submitBtn)
    formContainer.appendChild(form)
    dialog.appendChild(formContainer)
    return dialog
}

function removeProjectArr() {
    for (let i = 0; i < projectsArr.length; i++) {
        for (let x = 0; x < projectsArr[i].length; x++) {
            if (projectsArr[i][x] == "TO REMOVE") {
                // REMOVE project FROM projectsArr
                const removeIndex = projectsArr.indexOf(projectsArr[i])
                const filteredArr = projectsArr.splice(removeIndex, 1)
                
                eraseDOM(container)
                currentArr = []
                today = []
                currentArr.push(inbox)
                repopulateDOM(inbox)
                document.querySelector(".addTaskBtn").style.display = "flex"
                projectHeader.textContent = "Inbox"

                break
            }
        }
    }
}

function checkBoxMaker() {
    const radioBtn = document.createElement("input")
    radioBtn.type = "radio" 
    radioBtn.addEventListener("click", () => {
        radioBtn.parentElement.remove()
    })
    
    return radioBtn
}

export default ui()