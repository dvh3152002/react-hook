import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import Todo from './views/Todo';
import Covid from './views/Covid';
import {CountDown,NewCountDown} from './views/Countdown';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const App=()=> {
  const onTimesup=()=>{
    alert('times up')
  }

  return (
  <BrowserRouter>
      <div className="App">
        <Nav/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <Routes>
            <Route path="/" element={<Covid />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/timer" element={
              <>
                <CountDown 
                  onTimesup={onTimesup}
                />

                <span>----------------------</span>

                <NewCountDown
                  onTimesup={onTimesup}
                />
              </>
            }/>
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
