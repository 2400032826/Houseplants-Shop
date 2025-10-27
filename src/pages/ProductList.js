import React, { useState } from "react";
import "./ProductList.css";

function ProductList() {
  const [cartCount, setCartCount] = useState(0);
  const [disabledButtons, setDisabledButtons] = useState({});

  const plants = [
    { id: 1, name: "Snake Plant", price: 250, image: "https://m.media-amazon.com/images/I/71GywDOh0qL._AC_SL1500_.jpg" },
    { id: 2, name: "Peace Lily", price: 300, image: "https://m.media-amazon.com/images/I/71bL2U7m3uL._AC_SL1500_.jpg" },
    { id: 3, name: "Money Plant", price: 200, image: "https://m.media-amazon.com/images/I/61Bv5YwlxML._AC_SL1500_.jpg" },
    { id: 4, name: "Aloe Vera", price: 180, image: "https://m.media-amazon.com/images/I/81ZC2B5HEdL._AC_SL1500_.jpg" },
    { id: 5, name: "Bamboo Palm", price: 350, image: "https://m.media-amazon.com/images/I/81r6XUt0M5L._AC_SL1500_.jpg" },
    { id: 6, name: "Spider Plant", price: 220, image: "https://m.media-amazon.com/images/I/81hRnv4T5xL._AC_SL1500_.jpg" },
  ];

  const handleAddToCart = (id) => {
    setCartCount(cartCount + 1);
    setDisabledButtons({ ...disabledButtons, [id]: true });
  };

  return (
    <div className="product-page">
      <header>
        <h1>Houseplants Shop</h1>
        <div className="cart">🛒 {cartCount}</div>
      </header>

      <div className="product-list">
        {plants.map((plant) => (
          <div className="product-card" key={plant.id}>
            <img src={plant.image} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>₹{plant.price}</p>
            <button
              onClick={() => handleAddToCart(plant.id)}
              disabled={disabledButtons[plant.id]}
            >
              {disabledButtons[plant.id] ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
