import React from "react";
function Todo(props) {
return(
    <>
    <h1>My todo list</h1>
    {
        props.todos.map((todo,idx)=>{
            return(
                <>
                <p key={idx}>{todo + idx}</p>
                </>


            )
        })
    }
<button onClick={() => props.addtodo()}>Add Todo</button>


    </>
)
}

export default Todo;