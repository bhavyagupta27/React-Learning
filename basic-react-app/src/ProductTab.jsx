import Product from "./Product.jsx";

function ProductTab() {
  let options = ["hi-tech", "durable", "fast"];
  return (
    <>
      <Product title="Phone" price={30000} features={options} />
      <Product title="Premium Phone" price={40000} features={options} />
      <Product title="Basic Phone" price={20000} features={options} />
    </>
  );
}

export default ProductTab;