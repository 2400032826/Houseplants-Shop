import React, { useState } from "react";
import ProductList from "./pages/ProductList";

function App() {
  const [showHome, setShowHome] = useState(true);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      {showHome ? (
        <div>
          <h1>🌿 Welcome to Houseplants Shop 🌿</h1>
          <p>We sell beautiful indoor plants to brighten your home.</p>
          <button onClick={() => setShowHome(false)}>Get Started</button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}

export default App;
