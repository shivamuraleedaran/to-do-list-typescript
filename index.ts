import * as readline from 'readline';
import { TodoList } from './todo';

// Create a new TodoList instance
const todoList = new TodoList();

// Create readline interface
const rl = readline.createInterface({
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
function handleMenuChoice(choice: string) {
  switch (choice) {
    case '1':
      rl.question('Enter task: ', (task) => {
        todoList.addItem(task);
        displayMenu();
      });
      break;
    case '2':
      rl.question('Enter task ID to mark as completed: ', (id) => {
        todoList.markCompleted(parseInt(id, 10));
        displayMenu();
      });
      break;
    case '3':
      rl.question('Enter task ID to delete: ', (id) => {
        todoList.deleteItem(parseInt(id, 10));
        displayMenu();
      });
      break;
    case '4':
      console.log('\n===== Todo List =====');
      todoList.getList().forEach(item => {
        console.log(`[${item.completed ? 'x' : ' '}] ${item.id}. ${item.task}`);
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
