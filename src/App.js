import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import Todo from './views/Todo';
import Covid from './views/Covid';
import {CountDown,NewCountDown} from './views/Countdown';
import { useState,useEffect } from 'react';

const App=()=> {
  let [address,setAddress]=useState('');
  let [todos,setTodos]=useState([
    {id:"1",title:"Playing game"},
    {id:"2",title:"Watching TV"},
    {id:"3",title:"Reading book"}
  ]);

  const handleOnClick=()=>{
    if(!address){
      alert("empty input");
    }else{
      let todo={id: Math.floor(Math.random() * 10000+1),title:address};
      setAddress("");
      setTodos([...todos,todo]);
    }
  }  

  const handleOnChange=(event)=>{
    setAddress(event.target.value);
  }

  const handleDeleteTodo=(id)=>{
    let currentTodos=todos;
    currentTodos=currentTodos.filter(item=>id!==item.id);
    setTodos(currentTodos);
  }

  const onTimesup=()=>{
    alert('times up')
  }

  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CountDown 
          onTimesup={onTimesup}
        />
        <span>----------------------</span>
        
        <NewCountDown
          onTimesup={onTimesup}
        />

        <Covid/>
        {/* <Todo
          todos={todos}
          handleDeleteTodo={handleDeleteTodo}
        />
        <input type='text' value={address} onChange={(event)=>handleOnChange(event)}/>
        <button onClick={handleOnClick}>click</button> */}
      </header>
    </div>
  );
}

export default App;
