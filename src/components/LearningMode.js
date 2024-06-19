import CardMode from "./Card";
import { useState } from "react";

//gets the flashcardsList, shows cards one by one
const LearningMode = ({cardList}) => {
    const [showBack, setShowBack] = useState(false);
    const flip = () => { setShowBack(!showBack)};

    const [current, setCurrent] = useState(0);
    const next = () => { setCurrent(current +1)};
    return(
        <div>
            
            <div>
            {cardList[current].front}
            <button onClick={next}>Next</button>
            </div>
        </div>
    );
};

export default LearningMode;