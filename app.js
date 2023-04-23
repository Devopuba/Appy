import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"


const appSettings = {
    dataBaseURL:"https://kapu2-99ff9-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
//set up database var//
const database = getDatabase(app)
//set up the reference//

const shoppingListInDB = ref(database, "shoppingList") 


const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

//add event listener//
addButtonEl.addEventListener("click", function(){
    let inputValue = input.value
    push(shoppingListInDB, inputValue)
    console.log(input.Value)
})