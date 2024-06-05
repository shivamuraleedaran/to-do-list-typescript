export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

export class TodoList {
  private items: TodoItem[];

  constructor() {
      this.items = [];
  }

  addItem(task: string): void {
      const newItem: TodoItem = {
          id: this.items.length + 1,
          task,
          completed: false
      };
      this.items.push(newItem);
  }

  markCompleted(id: number): void {
      const item = this.items.find(item => item.id === id);
      if (item) {
          item.completed = true;
      }
  }

  deleteItem(id: number): void {
      this.items = this.items.filter(item => item.id !== id);
  }

  getList(): TodoItem[] {
      return this.items;
  }
}
