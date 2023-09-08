/**
*@jest-environment jsdom
*/

import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";

beforeEach (()  => {
    document.body.innerHTML = " ";
     
});

//*** Testar om funktionen addTodo lägger till en todo när villkoret är uppfyllt ***//

test("Should add a todo if todoText is more than 2 characters", () => {
    //Arrange
    let todos: Todo[] = []; // Skapar en tom Todo array
    let todoText = "test";  // todoText är mer än 2 tecken, dvs villkoret är uppfyllt
    let length = todos.length; // Sparar längden på todos i en variabel för att kunna jämföra senare

    //Act
    addTodo(todoText, todos)

    //Assert
    expect(todos.length).toBe(length + 1); // Förväntar sig att ursprungliga längden på todos har ökat med 1
    expect(todos[todos.length-1].text).toBe(todoText); // Förväntar sig att sista item i todos har texten "test"
});

//*** Testar om funktionen addTodo inte lägger till en todo när villkoret inte är uppfyllt ***//

test("Should not add a todo", () => {
    //Arrange 
    let todos: Todo[] = [];
    let todoText = ""; // todoText är mindre än 2 tecken, dvs villkoret är inte uppfyllt
    let todoLenght = todos.length; // Sparar längden på todos i en variabel för att kunna jämföra senare

    //Act
    addTodo (todoText, todos)

    //Assert
    expect(todos.length).toBe(todoLenght); // Förväntar sig att längden på todos inte har ökat
                                        
});

//*** Testar om funktionen changeTodo ändrar status på en todo ***//

test("Should change status of todo", () => {
    //Arrange
    let todo = new Todo ("todoTask", true) // Skapar en ny todo med texten "todoTask" och status true

    //Act
    changeTodo (todo) // Kör funktionen changeTodo på todo som ändrar status till det motsatta av befintliga

    //Assert
    expect(todo.done).toBe(false); // Förväntar sig att done ska vara false
});

//*** Testar om funktionen removeAllTodos tar bort alla todos ***//

test("Should remove all todos", () => {
    //Arrange
    let todos: Todo[] = [new Todo ("todoTask1", true), new Todo ("todoTask2", true), new Todo ("todoTask3", true)] // Skapar en Todo array med 3 todos

    //Act
    removeAllTodos(todos) // Kör funktionen removeAllTodos på arrayen vi skapade ovan som tar bort alla todos

    //Assert
    expect(todos.length).toBe(0); // Förväntar sig att längden på todos är 0
});