import React from "react";
import { useEffect, useState } from "react"

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
            <img onClick={handleOnClickFavorite} src= {isFavorite ?   '/img/heartActive.svg': '/img/heartUnactive.png'}   alt="" />
        </div>
        <img src={props.imageUrl} alt="" width={133} height={112} />
        <h5>{props.title}</h5>
        <div className="card_top">
            <div className="card_bottom">
                <span>Цена:</span>
                <b>{props.price}</b>
            </div>
            <img className="Plus" src={isAdded ? '/img/checked.svg': '/img/btnPlus.svg' } onClick={handleOnClickPlus}  width={32} height={32} alt="" />
        </div>
    </div>
    );
}

export default Card;


