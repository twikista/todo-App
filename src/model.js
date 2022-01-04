// class Todos {
//   constructor(title, description) {
//     this.id = id;
//     this.title = title;
//     this.description = description;
//     this.completed = false;
//   }
// }

// function createTodo({title, description}){
//   const todo = new Todos(title, description);
//   return todo
// }

class Model {
  constructor() {
    this.todos = [
      { id: 1, title: "Go shopping", completed: false, proirity: "medium" },
      { id: 2, title: "Do laundry", completed: false, priority: "high" },
    ];
  }
  addTodo(todoText, priority = "normal") {
    const todo = {
      id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 0,
      title: todoText,
      completed: false,
      priority,
    };
    this.todos.push(todo);
  }

  editTodo(id, editText) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? {
            id: todo.id,
            title: editText,
            completed: todo.completed,
            priority: todo.priority,
          }
        : todo
    );
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  toggleTodoCompleted(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? {
            id: todo.id,
            title: todo.title,
            completed: !todo.completed,
            priority: todo.priority,
          }
        : todo
    );
  }

  chooseTodoPriority(id, updatedPriority) {
    this.todos = this.todos.map((todo) =>
      todo.id === id
        ? {
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
            proirity: updatedPriority,
          }
        : todo
    );
  }
}

const model = new Model();
console.log(model);
model.addTodo("go hiking", "normal");
model.addTodo("go jumping", "high");
model.editTodo(2, "go swimming");
model.toggleTodoCompleted(2);
model.chooseTodoPriority(1, "medium");

export default Model;
