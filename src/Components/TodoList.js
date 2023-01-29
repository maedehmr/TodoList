import React, { useState, useContext } from "react";
import Todo from "./Todo";
import TodosContext from "../Context/Todos";

function TodoList(props) {
  const [statusDone, setDone] = useState(false);
  const todosContext = useContext(TodosContext);
  let { todos } = todosContext;
  let filterTodos = todos.filter((item) => item.done == statusDone);
  return (
    <>
      <nav className="d-flex justify-content-center">
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            className={`nav-item nav-link font-weight-bold text-danger
            ${
              statusDone === false
                ? "active border border-2 border-primary"
                : ""
            }`}
            id="nav-home-tab"
            type="button"
            onClick={() => setDone(false)}
          >
            انجام نشده{" "}
            <span class="badge bg-danger">
              {todos.filter((item) => item.done === false).length}
            </span>
          </a>
          <a
            className={`nav-item nav-link font-weight-bold text-success
            ${
              statusDone === true ? "active border border-2 border-primary" : ""
            }`}
            id="nav-profile-tab"
            type="button"
            onClick={() => setDone(true)}
          >
            انجام شده{" "}
            <span class="badge bg-success">
              {todos.filter((item) => item.done === true).length}
            </span>
          </a>
        </div>
      </nav>
      {filterTodos.length === 0 ? (
        <p className="text-center mt-5 text-muted">در حال حاضر هیچ تسکی وجود ندارد</p>
      ) : (
        filterTodos.map((item) => (
          <Todo
            item={item}
            key={item.key}
            delete={props.delete}
            done={props.done}
            edit={props.edit}
          />
        ))
      )}
    </>
  );
}

export default TodoList;
