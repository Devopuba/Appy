const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

//add event listener//
addButtonEl.addEventListener("click", function(){
    console.log(inputFieldEl.value)
})