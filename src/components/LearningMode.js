import CardMode from "./Card";
import { useState } from "react";

//gets the flashcardsList, shows cards one by one
const LearningMode = ({cardList}) => {
    
    const [showBack, setShowBack] = useState(false);
    const flip = () => { setShowBack(!showBack)};
    
    const [current, setCurrent] = useState(0);
    const next = () => {{current < (cardList.length -1) ? setCurrent(current +1): setCurrent(0)}};
    return(
        <div>
            
            <div>
                <div name="flipCard" onClick={flip}>
                    {showBack ? cardList[current].back : cardList[current].front}
                    <p>Click to flip card</p>
                </div>
            <button onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default LearningMode;