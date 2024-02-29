import React from "react";
import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import Form from "./Form";
import { useState } from "react";
import '../styles/App.css';

const App = () => {
  const [cart, updateCart] = useState([]);

  return (
    <div className="container-fluid main">
      <Banner />
      <div className="row" style={{ height: '90vh' }}>
        <div
          className="col-2 text-center cart"
          style={{ background: "#31b57" }}
        >
          <Cart className='cart' cart={cart} updateCart={updateCart} />
        </div>
        <div
          className="col-10 text-center shoppingListContent"

        >
          <ShoppingList className='' cart={cart} updateCart={updateCart} />
        </div>
      </div>
      <footer class="col-5 mx-auto text center">
        <Form />
      </footer>
    </div>
  );
};

export default App;
