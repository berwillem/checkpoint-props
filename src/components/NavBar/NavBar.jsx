import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function NavBar() {
  const cartlenght = useSelector((state) => state.cart.products.length);

  return (
    <div className="nav-bar">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/about">
          <li>About us</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/cart">
          <li>
            <FaShoppingCart />
          </li>
          {cartlenght > 0 && <div className="cart-length">{cartlenght}</div>}
        </Link>
      </ul>
    </div>
  );
}
