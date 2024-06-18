
import './App.css';
import { useState } from "react";

function App() {

  
  //an array containing the created cards, set to empty initially
  const [cardList, setCardList] = useState([]);
  //set the default mode to list-mode
  const [mode, setMode] = useState("list");
  // function to change the mode
  const changeMode = () => { setMode(mode === "list" ? "learn" : "list")
  };

  return (
    <div className="App">
      <div className="chooseMode">
          <button onClick={changeMode}>
            {(mode) === "list" ? "Swich to learning mode" : "Swich to list mode" }
          </button>
      </div>
      
        {/* if in learn mode, show learningModee.js, else show input form and list */}
        {mode === "learn" && <LearningMode />}
        
        {mode === "list" && 
            (<>
            <div className="addCard">
              <input />
              <input />
              <button> Add card </button>
            </div>
          <div className="list"></div>
          </>)}
            
    
  </div>);
};

export default App;
