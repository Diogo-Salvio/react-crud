import React, { useState } from "react";

import Button from "../Button/Button"
import Input from "../input/Input"
import Card from "../Card/Card";

import './Main.css'

const Main = () => {

    const [description, setDescription] = useState();

    const [cardList, setCardList] = useState([]);


    
    const handleAddCard = () => {
        setCardList([...cardList, { id: Math.random(), description: description}])
        setDescription("")
    }
    

    return (
        <div className="main">


            <div className="First-section">
                <Input value={description} onChange={(e) => setDescription(e.target.value)} />
                <Button onClick={() => handleAddCard() } />
            </div>

            <div className="Second-section">
                {cardList.map((card) => {
                    return (
                        <Card text={card.description}  key={card.id}/>
                    )
                } )}
            </div>
                
        </div>
    )
};


export default Main;