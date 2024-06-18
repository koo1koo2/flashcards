import Card from "./Card";
import { useState } from "react";

//gets the flashcardsList, shows cards one by one
const LearningMode = ({cardList}) => {
    const [current, setCurrent] = useState(0);
    const next = () => { setCurrent((previousState) => (previousState + 1) % cardList.lenght)};
    return(
        <>
          <Card card={cardList[current]} currentMode= "learn" index={current} />
          <button onClick={next}>Next</button> 
        </>
    );
};