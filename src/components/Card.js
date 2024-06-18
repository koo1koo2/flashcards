import { useState } from "react";

//returns a card in learn mode and in list mode, 
//takes in these props: card - containing the front and the back of a card;
// currentMode- learn or list;


const Card = ({card, currentMode}) => {
    
    const [showBack, setShowBack] = useState(false);
    const flip = () => { setShowBack(!showBack)};

    
    return (
        currentMode === "list" ? 
        (<>
        <div className="listCard">{card.front} - {card.back}</div>
        </>) :
        (<>
        <div className="singleCard" onClick={flip}>{showBack ? card.back : card.front}</div>
        </>) 
    );
};