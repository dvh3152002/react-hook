import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';

function App() {
  let name='abc';
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello {name}</h1>
      </header>
    </div>
  );
}

export default App;
