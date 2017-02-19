//create function that will run when the user clicks the button
function todoList() {


//create variable to get the value of the input tag
var item = document.getElementById('todoInput').value

//create a variable for the text node
var text = document.createTextNode(item)

//create variable for li tag
var newItem = document.createElement('li')

var list = document.getElementById('todoList')

newItem.appendChild(text)
document.getElementById('todoList').appendChild(newItem)

}
