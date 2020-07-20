window.setTimeout(function() {
    var todos = [];
    var input = prompt("What would you like to do?");
    while (input !== "quit"){
        if (input === "list"){
            listTodos();
        }
        else if (input === "new"){
            addTodos();
        }
        else if (input == "delete"){
            deleteTodos();
        }
        input = prompt("What would you like to do?");
    }
    console.log("Ok, you quit the app.");
  }, 500);

function listTodos(){
    console.log("**********");
    todos.forEach(function(todo, i){
        console.log(i + ": " + todo);
    });
    console.log("**********");
}

function addTodos() {
    var item = prompt("what would you like to add?");
    todos.push(item);
    console.log("Added todo");
}

function deleteTodos(){
    var index = prompt("Enter index of todo to delete");
    todos.splice(index,1);
    console.log("Deleted Todo");
}