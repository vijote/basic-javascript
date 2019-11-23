//si el usuario ingresa "new" se agrega la tarea
//si el usuario ingresa "list" se ve la lista completa
//si el usuario ingresa "quit" se cierra la app

var todos = [];
input = "";


function app(){
    while (input !="quit"){
        var input = prompt("write something");

        if(input ==="new"){
            var add = prompt("add a task");
            todos.push(add);
            alert("task added");
        }

        else if(input ==="list"){
            console.log("**********");
            todos.forEach(function(todo, index) {
                console.log("index is: "+ index + ", content is: "+ todo);
            });
            console.log("**********");
        }
        else if(input ==="delete"){
            var index = prompt("Select task to delete");
            //splice is going to delete starting from the "index", just 1 item
             todos.splice(index,1);
        }
    }
}

window.setTimeout(app, 500);

