import { useState,useEffect } from 'react';

const Todo=()=>{
    let [newTodo,setTodo]=useState('');
    let [todos,setTodos]=useState([
        {id:"1",title:"Playing game"},
        {id:"2",title:"Watching TV"},
        {id:"3",title:"Reading book"}
    ]); 

    const handleOnClick=()=>{
        if(!newTodo){
          alert("empty input");
        }else{
          let todo={id: Math.floor(Math.random() * 10000+1),title:newTodo};
          setTodo("");
          setTodos([...todos,todo]);
        }
    } 

    const handleOnChange=(event)=>{
        setTodo(event.target.value);
      }
    
      const handleDeleteTodo=(id)=>{
        let currentTodos=todos;
        currentTodos=currentTodos.filter(item=>id!==item.id);
        setTodos(currentTodos);
      }

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
            <input type='text' value={newTodo} onChange={(event)=>handleOnChange(event)}/>
            <button onClick={handleOnClick}>click</button>
        </div>
    );
}

export default Todo;