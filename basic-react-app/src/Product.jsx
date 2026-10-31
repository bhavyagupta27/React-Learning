import "./Product.css";

function Product({ title, price, features }) {
  let styles = { backgroundColor: "blue" };
  const list = features.map((feature, index) => <li key={index}>{feature}</li>);
  
  return (
    <div className="Product" style={styles}>
      <h3>{title}</h3>
      <h5>Price : {price}</h5>
      <ul>{list}</ul>
      {price > 30000 && <p>Discount of 5%</p>}
    </div>
  );
}

export default Product;