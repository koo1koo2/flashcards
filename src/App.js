import './App.css';

import LearningMode from './components/LearningMode';
import { useState, useEffect } from "react";

function App() {

  //an array containing the created cards, set to empty initially
  const [cardList, setCardList] = useState([]);
  
  //load cards from localstorage when opened
  useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem('flashcards')) || [];
    setCardList(savedCards);
  }, []);

  //save cardslist to localstorage
  useEffect(() => {
    localStorage.setItem('flashcards', JSON.stringify(cardList));
  }, [cardList]);

  const [front, setFront] = useState("");
    
  const [back, setBack] =useState("");
    
  const createCardFront = (event) => {
    setFront(event.target.value);
  }
    
  const createCardBack = (event) => {
    setBack(event.target.value);
  }
       
  
  //set the default mode to list-mode
  const [mode, setMode] = useState("list");
  // function to change the mode
  const changeMode = () => { setMode(mode === "list" ? "learn" : "list")};

      
  
  const addCard = () => {
    const card = {
      id: cardList.length === 0 ? 1 : cardList[cardList.length -1].id + 1,
      front: front,
      back: back,
    }
    setCardList([...cardList, card]);
    setFront("");
    setBack("");
  }

  const deleteCard = (id) => {
    setCardList(cardList.filter((card) => card.id !== id));
  }

  return (
    <div className="App">
      <div className='mode'>
          <button id="switch" onClick={changeMode}>
            {(mode) === "list" ? "Switch to learning mode" : "Switch to list mode" }
          </button>
      </div>
      
        {/* if in learn mode, show learningModee.js, else show input form and list */}
        {mode === "learn" && <LearningMode cardList={cardList}/>}
        
        {mode === "list" && 
            (<>
            <div className="addCard">
              <input  onChange={createCardFront} placeholder='Front side' value={front} required></input>
              <input  onChange={createCardBack} placeholder='Back side' value={back} required></input>
              <button onClick={addCard} id="add"> Add  </button>
            </div>
            
          <div className="list">
            {cardList.map((card) => {
              return (
              <>
              <div id="cardlist">
              <p id="front"> {card.front} </p> 
              
              <p id="back"> {card.back} </p>

              <button id="delete" onClick= {() => {deleteCard(card.id)}}>X</button> 
              </div>
              </>
              )})
            }
          </div>
          </>)
          
        }
            
    
  </div>);
};

export default App;
