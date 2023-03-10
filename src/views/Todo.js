const Todo=(props)=>{
    const {todos,handleDeleteTodo}=props;
    return(
        <div className="container">
            {todos && todos.length>0 &&
            todos.map((item,index)=>{
                return(
                    <div key={index}>
                        <li>{item.title}&nbsp;&nbsp;<span style={{cursor:"pointer"}} onClick={()=>handleDeleteTodo(item.id)}>x</span></li>
                    </div>
                );
            })
            }
        </div>
    );
}

export default Todo;