let items = [];

const itemdiv = document.getElementById("items")
const input = document.getElementById ("itemInput")
const storageKey = "itemkey";


function renderItems() {
    itemdiv.innerHTML = null;

    for (const [index, item] of Object.entries(items)){

        const container = document.createElement("div")
        container.style.marginBottom = "10px";

        const text = document.createElement("p")
        text.textContent = item
        text.style.display = "inline"
        text.style.marginInlineEnd ="10px"

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItems(index)

        container.appendChild(text)
        container.appendChild(button)

        itemdiv.appendChild(container)

    }
}


function loadItems() {
    const oldItems = localStorage.getItem(storageKey)
    if(oldItems) items= JSON.parse(oldItems) //convert into arraylist again 
    renderItems()
}


function saveItems() {
    const stringItems = JSON.stringify(items);// changing the list into string
    localStorage.setItem(storageKey, stringItems )
}

function addItems() {
    const value = input.value;
    if(!value){
        alert("You can't add empty item")
    }
    items.push(value)
    renderItems()
    input.value= ""
    saveItems()
}

function removeItems(index) {
    items.splice(index, 1) //delete 1 element which index we provided
    renderItems()
    saveItems()
}
document.addEventListener("DOMContentLoaded", loadItems)
//it will load all the html content and loadItems()
