
import './App.css';
import CardMode from './components/Card';
import LearningMode from './components/LearningMode';
import { useState } from "react";

function App() {
  //
    const [front, setFront] = useState("");
    const [back, setBack] =useState("");
    const createCardFront = (event) => {
    
      setFront(event.target.value);
  
    }
    const createCardBack = (event) => {
    
      setBack(event.target.value);
  
    }
  
  
    
  //an array containing the created cards, set to empty initially
  const [cardList, setCardList] = useState([]);
  //set the default mode to list-mode
  const [mode, setMode] = useState("list");
  // function to change the mode
  const changeMode = () => { setMode(mode === "list" ? "learn" : "list")};

  
  
  const addCard = () => {
    const card = {
      //id: ,
      front: front,
      back: back,
    }
    
    setCardList([...cardList, card]);
  }

  return (
    <div className="App">
      <div className="chooseMode">
          <button onClick={changeMode}>
            {(mode) === "list" ? "Swich to learning mode" : "Swich to list mode" }
          </button>
      </div>
      
        {/* if in learn mode, show learningModee.js, else show input form and list */}
        {mode === "learn" && <LearningMode cardList={cardList}/>}
        
        {mode === "list" && 
            (<>
            <div className="addCard">
              <input  onChange={createCardFront}/>
              <input  onChange={createCardBack}/>
              <button onClick={addCard}> Add card </button>
            </div>
            
          <div className="list">
            {cardList.map((card) => {
              return (<li>{card.front}</li> );})
            };
          </div>
          </>)
          
        }
            
    
  </div>);
};

export default App;
