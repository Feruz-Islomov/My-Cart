import Header from "./components/Header";
import Main from "./components/Main";
import Basket from "./components/Basket";
import data from "./data";
import React, { useEffect, useState } from "react";

export const OnAddContext = React.createContext();
export const OnRemoveContext = React.createContext();

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...product, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...product, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div className="App">
      <OnAddContext.Provider value={onAdd}>
        <OnRemoveContext.Provider value={onRemove}>
          <Header countCartItems={cartItems.length} />
          <div class="row">
            <Main items={products} />
            <Basket cartItems={cartItems} />
            {/* <Main onAdd={onAdd} items={products} />
            <Basket onRemove={onRemove} onAdd={onAdd} cartItems={cartItems} /> */}
          </div>
        </OnRemoveContext.Provider>
      </OnAddContext.Provider>
    </div>
  );
}

export default App;

// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Cart from "./Cart";
// import Home from "./Home";
// import { CartProvider } from "react-use-cart";

// function App() {
//   return (
//     <>
//       <CartProvider>
//         <Home />
//         <Cart />
//       </CartProvider>
//     </>
//   );
// }
// export default App;
