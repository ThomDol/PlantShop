import React from "react";
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Form from "./Form";
import { useState } from "react";

const App = () => {
  const [cart, updateCart] = useState([]);

  return (
    <div className="container-fluid main">
      <Banner />
      <div className="row">
        <div
          className="col-3 text-center cart"
          style={{ background: "#31b57" }}
        >
          <Cart cart={cart} updateCart={updateCart} />
        </div>
        <div
          className="col-9 text-center shoppingListContent"
          style={{ scrollBehavior: "auto" }}
        >
          <ShoppingList cart={cart} updateCart={updateCart} />
        </div>
      </div>
      <footer class="col-5 mx-auto text center">
        <Form />
      </footer>
    </div>
  );
};

export default App;
