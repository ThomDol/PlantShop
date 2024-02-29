import React from "react";
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Form from "./Form";
import { useState } from "react";

const App = () => {
  const [cart, updateCart] = useState([]);

  return (
    <div className="container main">
      <Banner />
      <div className="row">
        <div
          className="col-2 text-center cart"
          style={{ background: "#31b57" }}
        >
          <Cart cart={cart} updateCart={updateCart} />
        </div>
        <div
          className="col-10 text-center shoppingListContent"
          style={{ scrollBehavior: "auto" }}
        >
          <ShoppingList cart={cart} updateCart={updateCart} />
        </div>
      </div>
      <footer class="blockquote-footer">
        <Form />
      </footer>
    </div>
  );
};

export default App;
