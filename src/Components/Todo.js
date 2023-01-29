import React, { useState , useContext } from "react";
import EditTodo from "./EditTodo";
import TodosContext from "../Context/Todos";

function Todo(props) {
  const { item } = props;
  const [edit, setEdit] = useState(false);
  const todosContext = useContext(TodosContext)
  let editHandler = (text) => {
    todosContext.edit(item.key, text);
    setEdit(false);
  };
  return (
    <>
          {edit === false ? (     
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-lg-center bg-primary shadow text-white rounded p-4 mt-4">
                <div className="col-12 col-md-7 col-lg-8">
                {item.text}
                </div>
                <div className="col-12 col-md-5 col-lg-4 d-flex justify-content-center justify-content-md-end mt-3 m-md-0">
                  <a type="button"
                    onClick={() => todosContext.done(item.key)}
                   className=" mx-md-1 mx-2">
                    <img src={`${item.done ? "/icons/delete.svg" : "/icons/done.svg"}`}  alt="" width="30px" />
                  </a>
                  <a type="button" className="mx-md-1 mx-2" onClick={() => setEdit(true)}>
                    <img src="/icons/clipboard.svg" alt="" width="30px" />
                  </a>
                  <a type="button" className="mx-md-1 mx-2" onClick={() => todosContext.delete(item.key)}>
                    <img src="/icons/delete-alt.svg" alt="" width="30px" />
                  </a>
                </div>
              </div>
           ) : (
        <EditTodo text={item.text} edit={editHandler} />
      )}

    </>
  );
}
export default Todo;
