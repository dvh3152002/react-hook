import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';

const App=()=> {
  let [name,setName]=useState('adasd');
  let [address,setAddress]=useState('');
  let [todos,setTodos]=useState([]);

  const handleOnClick=()=>{
    if(!address){
      alert("empty input");
    }else{
      let todo={id:'1',title:address};
      setAddress("");
      setTodos([...todos,todo]);
    }
  }  

  const handleOnChange=(event)=>{
    setAddress(event.target.value);
    console.log(address)
  }

  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {todos && todos.length>0 &&
          todos.map((item,index)=>{
            return(
              <li key={index}>{item.title}</li>
            );
          })
        }
        <input type='text' value={address} onChange={(event)=>handleOnChange(event)}/>
        <button onClick={handleOnClick}>click</button>
      </header>
    </div>
  );
}

export default App;
