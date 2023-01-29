import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

//Components
import FormAddTodo from "./FormAddTodo.js";
import TodoList from "./TodoList";
//import Contexts
import TodosContext from "../Context/Todos";

class App extends Component {
  state = {
    todos: [],
  };
  addTodo(text) {
    this.setState((prevState) => {
      return {
        todos: [...prevState.todos, { key: Date.now(), done: false, text }],
      };
    });
  }
  deleteTodo(key) {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter((item) => item.key !== key),
      };
    });
  }
  toggleTodo(key) {
    let { todos } = this.state;
    let item = todos.find((item) => item.key === key);
    item.done = !item.done;
    let newTodos = todos.filter((item) => item.key !== key);
    this.setState({
      todos: [...newTodos, item],
    });
  }
  editTodo(key, text) {
    let { todos } = this.state;
    let item = todos.find((item) => item.key === key);
    item.text = text;
    let newTodos = todos.filter((item) => item.key !== key);
    this.setState({
      todos: [...newTodos, item],
    });
  }
  render() {
    return (
<TodosContext.Provider value={{
  todos : this.state.todos,
  add : this.addTodo.bind(this),
  done : this.toggleTodo.bind(this),
  delete : this.deleteTodo.bind(this),
  edit : this.editTodo.bind(this)
}}>
<div className="App">
<div className="bg-light min-vh-100 d-flex align-items-center justify-content-center ">
          <div className="col-10 col-lg-5 col-md-8 my-5">
            <section className="bg-primary bg-gradient p-4 rounded-3 shadow">
              <div>
                <h3 className="text-white text-center">لیست تسک ها</h3>
              </div>
              <FormAddTodo />
            </section>
            <section className="mt-4">
            <TodoList/>
            </section>
          </div>
        </div>
      </div>
</TodosContext.Provider>
    );
  }
}
export default App;
