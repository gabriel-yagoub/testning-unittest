import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";


test("should pass if more than 2 characters", () => {
    //Arrange
    let todos: Todo[] = [];
    let todoText = "Todo";

    //Act
    addTodo(todoText, todos)

    //Assert
    expect(todoText.length).toBeGreaterThan(2);
})


test("should pass if todos is empty", () => {
    //Arrange 
    let todos: Todo[] = [];
    //Act
    removeAllTodos(todos)
    //Assert
    expect(todos.length).toBeLessThan(1);
})