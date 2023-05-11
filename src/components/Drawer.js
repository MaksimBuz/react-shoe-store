import cartEmpty from "../img/cartEmpty.png"

import arrowL from "../img/arrowL.png"
import cartBtnRemove from "../img/cartBtnRemove.svg"
import arrowR from "../img/arrowR.svg"

function Drawer({ onClose, items = [], onRemove }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30">Корзина  <img className="RemoveBtn" onClick={onClose} src="" alt="Remove" /></h2>
                {(items.length == 0) ?
                
                <div>
                    <img src={cartEmpty } alt="" />
                    <h2>Корзина пустая</h2>
                    <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                    <button className="greenBtn "  onClick={onClose}><img src={arrowL} alt=""  />Вернуться назад</button>
                </div> :
                    <div>
                        <div className="items">
                            {items.map(obj => (
                                <div className="cartItem ">
                                    <div className="CartItemImg" style={{ backgroundImage: `url(${obj.imageUrl})` }}>
                                    </div>
                                    <div className="mr-20">
                                        <p className="mb-5">{obj.name}</p>
                                        <b>{obj.price}</b>
                                    </div>
                                    <img className="RemoveBtn" src={cartBtnRemove} alt="Remove" onClick={() => onRemove(obj.id)} />
                                </div>
                            ))}

                        </div>
                        <div className="total-Block">
                            <ul >
                                <li >
                                    <span>Итого:  </span>
                                    <div>

                                    </div>
                                    <b>21 498 руб. </b>
                                </li>
                                <li >
                                    <span>Налог 5%:   </span>
                                    <div>

                                    </div>
                                    <b>1074 руб.</b>
                                </li>
                            </ul>
                            <button className="greenBtn" >Оформить заказ <img src= {arrowR} alt="" /></button>
                        </div>
                    </div>


                }



            </div>
        </div>
    );
}

export default Drawer;