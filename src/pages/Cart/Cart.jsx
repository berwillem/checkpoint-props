import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";
export default function Cart() {
  const cart = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  const dispatch = useDispatch();

  return (
    <>
      {cart.length === 0 ? (
        <h1>your cart is empty</h1>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <button onClick={() => dispatch(removeFromCart(product))}>
                remove
              </button>
            </div>
          ))}
          <p>Total: {total.toFixed(2)}</p>
        </div>
      )}
    </>
  );
}
