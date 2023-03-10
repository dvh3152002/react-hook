const Todo=(props)=>{
    const todos=props.todos;
    return(
        <div className="container">
            {todos && todos.length>0 &&
            todos.map((item,index)=>{
                return(
                <li key={index}>{item.title}</li>
                );
            })
            }
        </div>
    );
}

export default Todo;