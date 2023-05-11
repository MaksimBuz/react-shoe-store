import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import logo from "../img/logo.png"
import favorite_icon from "../img/favorite_icon.svg"
import user from "../img/user.svg"
import cart from "../img/cart.png"

function Header(props) {
  return (
    <header>
      <div className="headerL">
      <Link to={"/"}>  <img src={logo} width={40} height={40} alt="" /></Link>
        <div >
          <h3 >REACT SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div>
        <ul className="headerR">
          <li>
            <img src={cart} width={18} height={18} alt="" onClick={props.onClickCart} />
            <span>1205 руб.</span>
          </li>

          <li>
            <img src={user} width={18} height={18} alt="" />
          </li>
          <li>
            <Link to={"/favorits"}><img src={favorite_icon} width={18} height={18} alt="" /></Link>
            
          </li>
        </ul>
      </div>
    </header>


  );
}

export default Header;