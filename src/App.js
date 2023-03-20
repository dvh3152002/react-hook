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
import Blog from './views/Blog';
import DetailBlog from './views/DetailBlog';
import AddNewBlog from './views/AddNewBlog';

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
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<DetailBlog />} />
            <Route path="/add-new-blog" element={<AddNewBlog />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
