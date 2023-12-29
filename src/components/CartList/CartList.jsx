import { useState } from "react";
import Cart from "../Cart";

export default function CartList() {
  const [purchase, setPurchase] = useState([])

  const handleUpdatePurchase = (product) => {
    setPurchase(prevState => {
      return [
        ...prevState,
        product
      ]
    })
  }

  const handleRemoveOrder = (id) => {
    const removeOrderIndex = purchase.findIndex(order => order.id == id)
    setPurchase(prevState => {
      const newState = [...prevState]
      newState.splice(removeOrderIndex, 1)
      return newState
    })
  }

  return (
    <ul className="h-full max-w-3xl flex-wrap m-auto gap-10 flex items-center  relative">
      <li className="w-full md:flex-1 box-border">
        <Cart onAddToCart={handleUpdatePurchase} purchaseList={purchase} />
      </li>
      <li className="w-full md:flex-1 box-border">
        <Cart onRemoveButtonClick={handleRemoveOrder} checkout purchaseList={purchase} />
      </li>
    </ul>
  );
}
