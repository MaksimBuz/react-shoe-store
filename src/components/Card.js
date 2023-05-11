import React from "react";
import { useEffect, useState } from "react"


import heartActive from "../img/heartActive.svg"
import heartUnactive from "../img/heartUnactive.png"
import checked from "../img/checked.svg"
import btnPlus from "../img/btnPlus.svg"

function Card(props) {
   

    const [isFavorite ,SetIsFavorite  ] = useState(false);

// Меняем картинку иконки добавления в корзину
    const [isAdded ,SetIsAdded] = useState(props.added);

    const handleOnClickPlus = ()=>{
        props.onClickPlus(props)
        SetIsAdded(!isAdded)
       
     
    }
// Меняем картинку иконки добавления в избранное
    const handleOnClickFavorite = ()=>{
        SetIsFavorite(!isFavorite)
        props.addToFavorite(props)
     
    }
    return(
    <div className="card" >
        <div className="card__favorite" onClick={props.onClickFavorite}>
            <img onClick={handleOnClickFavorite} src= {isFavorite ?  { heartActive} : {heartUnactive}}   alt="" />
        </div>
        <img src={props.imageUrl} alt="" width={133} height={112} />
        <h5>{props.title}</h5>
        <div className="card_top">
            <div className="card_bottom">
                <span>Цена:</span>
                <b>{props.price}</b>
            </div>
            <img className="Plus" src={isAdded ? checked: btnPlus } onClick={handleOnClickPlus}  width={32} height={32} alt="" />
        </div>
    </div>
    );
}

export default Card;


