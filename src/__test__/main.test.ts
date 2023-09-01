
/**
 * @jest-environment jsdom
 */

import * as main from "../ts/main";
import * as functions from "../ts/functions";
import { Todo } from "../ts/models/Todo";
import { IAddResponse } from "../ts/models/IAddResult";
import { createNewTodo } from "../ts/main";
import { addTodo } from "../ts/functions";
import { displayError } from "../ts/main";
import { toggleTodo } from "../ts/main";
import { clearTodos } from "../ts/main";

beforeEach(() => {
    document.body.innerHTML = "";
});

afterEach(() => {
    jest.restoreAllMocks();
});

// Testar om createNewTodo anropar addTodo
test("Should test if function is being correctly called and DOM is being updated", () =>{
    //arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`
    let todoText ="test"
    let todos: Todo[] = [new Todo ("todoTask1", true), new Todo ("todoTask2", false), new Todo ("todoTask3", true)] // Skapar en Todo array med 3 todos
    const newTodo: IAddResponse = addTodo(todoText, todos); // Skapar en ny todo med texten "test" och lägger till den i todos arrayen
    const theMatrixSpy = jest.spyOn(functions, "addTodo").mockReturnValue(newTodo); // spionerar på funktionen addTodo och mockar returnvärdet

    //act
    createNewTodo(todoText, todos)

    //assert
    expect(theMatrixSpy).toHaveBeenCalled();
    theMatrixSpy.mockRestore();
});



test("Test if displayError gets called", () => {
    //arrange
    document.body.innerHTML = `<div id="error" class="error"></div>`
    let errorText = "test"
    const displayErrorSpy = jest.spyOn(main, "displayError");

    //act
    displayError(errorText, true)

    //assert
    expect(displayErrorSpy).toHaveBeenCalled();
    displayErrorSpy.mockRestore();
});

test("Test if HTML is being created", () => {
    //arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`
    let todos: Todo[] = [new Todo ("todoTask1", true), new Todo ("todoTask2", false), new Todo ("todoTask3", true)] // Skapar en Todo array med 3 todos
    const createHtmlSpy = jest.spyOn(main, "createHtml");

    //act
    main.createHtml(todos)

    //assert
    expect(createHtmlSpy).toHaveBeenCalled();
    createHtmlSpy.mockRestore();
});

test("Test if toggleTodo gets called", () => {
    //arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>`
    let todos: Todo[] = [new Todo ("todoTask1", true), new Todo ("todoTask2", false), new Todo ("todoTask3", true)] // Skapar en Todo array med 3 todos
    const toggleTodoSpy = jest.spyOn(main, "toggleTodo");

    //act
    toggleTodo(todos[0]) // Skickar in första todo i arrayen

    //assert
    expect(toggleTodoSpy).toHaveBeenCalled();
    toggleTodoSpy.mockRestore();
}
);

test("Test if clearTodos gets called", () => {
    //arrange
    document.body.innerHTML = `<ul id="todos" class="todo"></ul>` // Skapar en ul med id todos
    let todos: Todo[] = [new Todo ("todoTask1", true), new Todo ("todoTask2", false), new Todo ("todoTask3", true)] // Skapar en Todo array med 3 todos
    const clearTodosSpy = jest.spyOn(main, "clearTodos"); // Spionerar på funktionen clearTodos

    //act
    clearTodos(todos) // Skickar in arrayen

    //assert
    expect(clearTodosSpy).toHaveBeenCalled(); // Testar om funktionen har anropats
    clearTodosSpy.mockRestore(); // Återställer funktionen
    expect(todos.length).toBe(0); // Testar om arrayen är tom
});