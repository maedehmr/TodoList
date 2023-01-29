import React,{useState , useContext} from 'react'
import TodosContext from "../Context/Todos";
function FormAddTodo(props){
    const [text , setText] = useState('');
    const todosContext = useContext(TodosContext)
   let formHandler = e => {
        e.preventDefault();
        todosContext.add(text);
        setText('');
        }
        let inputHandler = e => setText(e.target.value)
return(
    <form className="form mt-4 mb-2" onSubmit={formHandler}>
    <div className="form-group d-flex">
      <input onChange={inputHandler} value={text} type="text" className="form-control mx-1" placeholder="تسک های خود را وارد کنید"/>
      <button type="submit" className="btn btn-outline-light mx-1">ثبت</button>
    </div>
  </form>
//     <form className="form" onSubmit={formHandler}>
//     <div className="form-group d-flex">
//       <input type="text" onChange={inputHandler} value={text} className="form-control mx-sm-3" placeholder="i want to do ..."/>
//       <button type="submit" className="btn btn-primary">add</button>
//     </div>
//   </form>
)
}
export default FormAddTodo