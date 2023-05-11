import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <div className="headerL">
      <Link to={"/"}>  <img src="/img/logo.png" width={40} height={40} alt="" /></Link>
        <div >
          <h3 >REACT SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div>
        <ul className="headerR">
          <li>
            <img src="/img/cart.png" width={18} height={18} alt="" onClick={props.onClickCart} />
            <span>1205 руб.</span>
          </li>

          <li>
            <img src="/img/user.svg" width={18} height={18} alt="" />
          </li>
          <li>
            <Link to={"/favorits"}><img src="/img/favorite_icon.svg" width={18} height={18} alt="" /></Link>
            
          </li>
        </ul>
      </div>
    </header>


  );
}

export default Header;