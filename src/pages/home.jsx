import Card from '../components/Card';
import React,{ useEffect, useState } from "react";

function Home(props) {



    return (
        
        <div className="content">
            <div className="content__header">
                <h1 >Все кроссовки</h1>
                <p >{props.searchValue ? `Поиск по запросу "${props.searchValue}"` : null}</p>
                <div className="search">
                    <img src="/img/search-icon.svg" alt="Search" />
                    <input value={props.searchValue} placeholder="Поиск..." onChange={props.onChangeSearchInput} />
                    {props.searchValue ? <img src="/img/btnRemove.png" alt="Search" className='clearBtn' onClick={() => props.SetSearchValue('')} /> : null}

                </div>
            </div>
            <div className="sneakers">
                {
                    props.items.filter((obj) => obj.name.toLowerCase().includes(props.searchValue)).map(obj =>
                        <Card key={obj.name}
                            title={obj.name}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
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