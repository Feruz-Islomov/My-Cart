import React, { useContext } from "react";
import { OnAddContext } from "../App";
import Product from "./Product";

export default function Main(props) {
  const onAdd = useContext(OnAddContext);
  const { items } = props;

  return (
    <main className="block col-2">
      <h2>Products</h2>
      <div className="row">
        {items.map((item) => {
          return <Product key={item.id} product={item} onAdd={onAdd} />;
        })}
      </div>
    </main>
  );
}
