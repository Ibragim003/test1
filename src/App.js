import logo from './MegaMart.png'
import menu from './Rectangle 3.png'
import poisk from './Search.png'
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={menu}/>
        <img src={logo}/>
        <div className="poisk">
          <img src={poisk}/>

          <input className='search' placeholder='Search essentials, groceries and more...'></input>
          <p></p>

        </div>
        
      </header>
      
     
    </div>
  );
}

export default App;
