import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handleDecrease = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrease = () => {
    if (stock > count) setCount(count + 1);
  };

  const handleAdd = () => {
    setCount(1);
    onAdd(count);
  };

  return (
    <div className="item-count">
      <mark onClick={handleDecrease} className="rounded-button">-</mark>
      <input value={count} readOnly />
      <mark onClick={handleIncrease} className="rounded-button">+</mark>
      <button onClick={handleAdd} className="rounded-button">
        Agregar al carrito!
      </button>
    </div>
  );
};

