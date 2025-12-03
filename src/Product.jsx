const Product = () => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src="https://via.placeholder.com/400" alt="Product Image" />
      </div>

      <div className="product-info">
        <h1>Wireless Headphones</h1>
        <p className="price">$129.99</p>
        <p className="description">
          Experience high-quality sound with these wireless headphones.
          Featuring noise cancellation, long-lasting battery life, and a sleek
          modern design for everyday use.
        </p>

        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
