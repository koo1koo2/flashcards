import { useState } from "react";
import "./learningMode.css";

//gets the flashcardsList, shows cards one by one
const LearningMode = ({cardList}) => {
    
    const [showBack, setShowBack] = useState(false);
    const flip = () => { setShowBack(!showBack)};
    const cardStyle = showBack ? {backgroundColor :"lightcyan"} : {backgroundColor: "lightyellow"}
    
    const [current, setCurrent] = useState(0);
    const next = () => {{current < (cardList.length -1) ? setCurrent(current +1): setCurrent(0)}
        setShowBack(false);                    
    };
    return(
        <div className="learningmode">
            <div>
                <div className="flipCard" onClick={flip} style={cardStyle}>
                    {showBack ? cardList[current].back : cardList[current].front}
                    <p id="click">Click to flip card</p>
                </div>
            <button id="next" onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default LearningMode;