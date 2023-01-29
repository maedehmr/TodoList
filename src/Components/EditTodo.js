import React , {useState} from 'react'

function EditTodo(props) {
    const [text,setText]=useState(props.text);
    let inputHandler = e => setText(e.target.value);
    return(
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-lg-center bg-primary shadow text-white rounded p-4 mt-4">
          <div className="col-lg-10 col-md-8">
           <input value={text} onChange={inputHandler} className="form-control" />
          </div>
          <div>
            <button type="button" className="btn btn-outline-light btn-sm py-2 px-3 mx-1 mt-4 mt-md-0" onClick={()=> props.edit(text)}>
              ویرایش
            </button>
          </div>
      </div>
    )
}

export default EditTodo;