import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
 

import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/home';

import React,{ useEffect, useState } from "react";
import Favorits from './pages/favorits';



function App() {
  
// Получение товаров с сервера
  const [items ,SetIems] = useState([]);

// Отправка товаров в корзину и CartItems  
  useEffect(()=>{
  axios.get('https://6457fd7c0c15cb148215d332.mockapi.io/items').then((res)=>{SetIems(res.data)});

  axios.get('https://6457fd7c0c15cb148215d332.mockapi.io/Cart').then((res)=>{SetCartItems(res.data)});

}
,[]);


 
  
  const [cartOpened ,SetCartOpened] = useState(false);

  const [cartItems ,SetCartItems ] = useState([]);


  const [searchValue ,SetSearchValue ] = useState();


 

  const onChangeSearchInput=(text)=>{
    SetSearchValue(text.target.value)
    
  }

// Добавление товара в список корзины из сервера
  const addTOCart=(props)=>{
    axios.post('https://6457fd7c0c15cb148215d332.mockapi.io/Cart' ,props );


  }

// Удаление товара в список корзины из сервера
  const DeleteTOCart=(idSneakers)=>{
    SetCartItems((prev)=>prev.filter(item=>item.id!== idSneakers));
    axios.delete(`https://6457fd7c0c15cb148215d332.mockapi.io/Cart/${idSneakers}`);
  }

// Добавление товара в список избранного
const [favoriteItems ,SetFavoriteItems ] = useState([]);

const addToFavorite=(FavoriteItems)=>{
      console.log(FavoriteItems)  
      SetFavoriteItems((prev)=>[...prev,FavoriteItems])


}

  return (
    <div className="Wrapper clear">

     {cartOpened ? <Drawer onClose={()=>SetCartOpened(false)} items={cartItems}  onRemove={DeleteTOCart}/> : null} 
      <Header onClickCart={()=>SetCartOpened(true)}  />
    
 <Routes>
    <Route path="/favorits" element={<Favorits items={favoriteItems} addToFavorite={addToFavorite} />}/>
    <Route path="/" element={ 
    <Home 
      searchValue={searchValue} 
      items={items} addTOCart={addTOCart} 
     onChangeSearchInput={onChangeSearchInput} 
     addToFavorite={addToFavorite}
      />} exact/>
  </Routes>
  </div>
  );
}

export default App;
