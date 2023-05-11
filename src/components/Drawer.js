function Drawer({ onClose, items = [], onRemove }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30">Корзина  <img className="RemoveBtn" onClick={onClose} src="/img/cartBtnRemove.svg" alt="Remove" /></h2>
                {(items.length == 0) ?
                
                <div>
                    <img src="/img/cartEmpty.png" alt="" />
                    <h2>Корзина пустая</h2>
                    <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                    <button className="greenBtn "  onClick={onClose}><img src="/img/arrowL.png" alt=""  />Вернуться назад</button>
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
                                    <img className="RemoveBtn" src="/img/cartBtnRemove.svg" alt="Remove" onClick={() => onRemove(obj.id)} />
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
                            <button className="greenBtn" >Оформить заказ <img src="/img/arrowR.svg" alt="" /></button>
                        </div>
                    </div>


                }



            </div>
        </div>
    );
}

export default Drawer;