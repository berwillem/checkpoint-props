import "./ProductCard.css";
import { useDispatch } from "react-redux";
import { addTocart } from "../../redux/cartSlice";
export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <>
      <div className="card">
        <img src={product.thumbnail} alt="product image" />
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>{product.price} DA</p>
        <button onClick={() => dispatch(addTocart(product))}>
          Add to cart
        </button>
      </div>
    </>
  );
}
