import "./Product.css";
import Price from "./Price.jsx"
function Product({ title }) {
  let oldPrices = ["12,495", "11,900", "34,567", "67,849"];
  let newPrices = ["495", "11", "34,999", "67,859"];
  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>Product</p>
      <p>Description</p>
      <Price/>
    </div>
  );
}

export default Product;