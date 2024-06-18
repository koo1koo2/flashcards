import { useState } from "react";



const Card = (props) => {
    return (
        <div> {props.front} </div>
        
        <div> {props.back} </div>
    );
};