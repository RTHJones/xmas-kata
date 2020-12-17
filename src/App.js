import logo from './snf.png';
import './App.css';
import singSong from './singalong';
import React from 'react';


function App() {
  return (
    <div className="App">

        <header className="App-header">

          <p className="title">
            Welcome to RJ's Christmas Kata Competition solution!
          </p>

          <br></br>
          <img src={logo} className="App-logo" alt="logo" />
          <br></br>

          <button className="button" onClick={() => { 
            var verses = prompt("How many verses shall we sing?");
            singSong(verses)
            
          }}>Sing for me!</button>

          <br></br>

          <a
            className="App-link"
            href="https://people.howstuffworks.com/culture-traditions/holidays-christmas/twelve-days-christmas"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn more about the twelve days of Christmas
          </a>


          
        </header>


      </div>
    );

}
export default App;
