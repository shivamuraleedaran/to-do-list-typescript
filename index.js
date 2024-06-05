"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var todo_1 = require("./todo");
// Create a new TodoList instance
var todoList = new todo_1.TodoList();
// Create readline interface
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// Function to display menu options
function displayMenu() {
    console.log('\n===== Todo List Menu =====');
    console.log('1. Add a new task');
    console.log('2. Mark a task as completed');
    console.log('3. Delete a task');
    console.log('4. View the list');
    console.log('5. Exit\n');
    rl.question('Select an option: ', handleMenuChoice);
}
// Function to handle user's menu choice
function handleMenuChoice(choice) {
    switch (choice) {
        case '1':
            rl.question('Enter task: ', function (task) {
                todoList.addItem(task);
                displayMenu();
            });
            break;
        case '2':
            rl.question('Enter task ID to mark as completed: ', function (id) {
                todoList.markCompleted(parseInt(id, 10));
                displayMenu();
            });
            break;
        case '3':
            rl.question('Enter task ID to delete: ', function (id) {
                todoList.deleteItem(parseInt(id, 10));
                displayMenu();
            });
            break;
        case '4':
            console.log('\n===== Todo List =====');
            todoList.getList().forEach(function (item) {
                console.log("[".concat(item.completed ? 'x' : ' ', "] ").concat(item.id, ". ").concat(item.task));
            });
            displayMenu();
            break;
        case '5':
            rl.close();
            break;
        default:
            console.log('Invalid option. Please select again.');
            displayMenu();
    }
}
// Display the menu
displayMenu();
