import "./Product.css";
import Price from "./Price.jsx";

function Product({ title, idx }) {
  let oldPrices = ["12,495", "11,900", "34,567", "67,849"];
  let newPrices = ["495", "11", "34,999", "67,859"];
  let description = [
    ["8,000 DPI","5 Programmable buttons"]
    ,["intuitive surface","design for ipad pro"]
    ,["designed for ipad","intuitive surface"]
    ,["wireless","optical orientation"]
  ];

  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>Product</p>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]} />
    </div>
  );
}

export default Product;