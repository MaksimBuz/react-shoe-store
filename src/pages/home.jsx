import Card from '../components/Card';
import React,{ useEffect, useState } from "react";

import search_icon from "../img/search-icon.svg"
import btnRemove from "../img/btnRemove.png"
import sn_1 from "../img/sn-1.jpg"

function Home(props) {
    return (
        
        <div className="content">
            <div className="content__header">
                <h1 >Все кроссовки</h1>
                <p >{props.searchValue ? `Поиск по запросу "${props.searchValue}"` : null}</p>
                <div className="search">
                    <img src={search_icon} alt="Search" />
                    <input value={props.searchValue} placeholder="Поиск..." onChange={props.onChangeSearchInput} />
                    {props.searchValue ? <img src={btnRemove} alt="Search" className='clearBtn' onClick={() => props.SetSearchValue('')} /> : null}
                </div>
            </div>
            <div className="sneakers">
                {
                    props.items.filter((obj) => obj.name.toLowerCase().includes(props.searchValue)).map(obj =>
                        <Card key={obj.name}
                            title={obj.name}
                            price={obj.price}
                            imageUrl={sn_1}
                            onClickPlus={(objSneakersProps) => props.addTOCart(objSneakersProps)}
                            addToFavorite={(favoriteItems) =>props.addToFavorite(favoriteItems)}

                        />
                    )
                }
            </div>
        </div>



    )
}
export default Home;