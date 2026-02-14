import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./Redux/slice";
import { fetchProducts } from "./Redux/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const ProductSelector = useSelector((state) => state.products.items);
  // console.log(ProductSelector);

  const cartSelector = useSelector((state) => state.cart.items);

  return (
    <div className="grid">
      {ProductSelector.length &&
        ProductSelector.map((item) => (
          <div key={item.id} className="card">
            <img src={item.thumbnail} alt={item.title} />
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="brand">{item.brand}</div>
              <div className="price">{item.price}</div>
              <div className="rating">{item.rating}</div>
              {cartSelector.find((cartItem) => cartItem.id === item.id) ? (
                <button onClick={() => dispatch(removeItem(item))} className="btn remove-button">Remove From Cart</button>
              ) : (
                <button onClick={() => dispatch(addItem(item))} className="btn">
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;
