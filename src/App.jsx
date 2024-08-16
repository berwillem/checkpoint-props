import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList/ProductList";
var api_url = import.meta.env.VITE_API_URL;
export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(api_url)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <ProductList products={products}></ProductList>
    </>
  );
}
