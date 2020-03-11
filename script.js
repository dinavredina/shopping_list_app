
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
};

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    var newButton = document.createElement('button');
    newButton.classList.add('del_item');
    li.appendChild(newButton);
    ul.appendChild(li);
    input.value = "";
    addTogglerToNewItems(li);
    addDeleteButtonListener(newButton); 
};

function addTogglerToNewItems(li) {
    li.addEventListener("click", function() {
        li.classList.toggle("done")
    })
};

function addDeleteButtonListener(newButton) {
    newButton.addEventListener("click", function() {
        newButton.parentNode.remove();
    })
};

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
};

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement();
    }
};

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);


function addTogglerToTodoItems(itemsNodeList) {
    for (let i = 0; i < itemsNodeList.length; i++) {
        let item = itemsNodeList[i];

        item.addEventListener("click", function() {
            item.classList.toggle("done");
        })
    } 
};

var liItemsList = document.querySelectorAll("li");
addTogglerToTodoItems(liItemsList);

function addButtontoEveryLi() { 
    for (let i = 0; i < liItemsList.length; i++) {
        let item = liItemsList[i];

        const parent = item;
        let buttons = parent.childNodes;

        const newButton = document.createElement('button');
        newButton.classList.add('del_item');
        parent.appendChild(newButton);
       
    }
}; 

addButtontoEveryLi();

var deleteButtonsCollection = document.getElementsByClassName('del_item');
for (let i=0; i<deleteButtonsCollection.length; i++) {
    const deleteButton = deleteButtonsCollection[i];
    deleteButton.addEventListener('click', function(){
        deleteButton.parentNode.remove()
    });
};
