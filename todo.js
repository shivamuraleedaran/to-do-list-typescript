"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoList = void 0;
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.items = [];
    }
    TodoList.prototype.addItem = function (task) {
        var newItem = {
            id: this.items.length + 1,
            task: task,
            completed: false
        };
        this.items.push(newItem);
    };
    TodoList.prototype.markCompleted = function (id) {
        var item = this.items.find(function (item) { return item.id === id; });
        if (item) {
            item.completed = true;
        }
    };
    TodoList.prototype.deleteItem = function (id) {
        this.items = this.items.filter(function (item) { return item.id !== id; });
    };
    TodoList.prototype.getList = function () {
        return this.items;
    };
    return TodoList;
}());
exports.TodoList = TodoList;
