import PropTypes from "prop-types";
import Product from "../Product/Product";
import { productData } from "../../constant/product-data";
import { useEffect, useState } from "react";
import OrderItem from "../OrderItem";

export default function Cart(props) {
  const { checkout, onAddToCart, purchaseList, onRemoveButtonClick } = props;
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(productData);
  }, []);

  const totalPrice = purchaseList.map((order) => order.price).reduce(
    (acc, current) => acc + current,
    0
  );


  if (!productList) return null;
  return (
    <div className="relative before:absolute before:w-[300px] before:top-[-20%] before:left-[-50%] before:rounded-full before:h-[300px] before:bg-[#f6c90e] overflow-hidden bg-white h-[600px] w-full rounded-2xl shadow-lg px-7 py-3">
      <div className="flex items-center relative justify-between">
        <img
          className="block w-[50px]"
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/732/732084.png"
        />
        {checkout && <span>Total: {purchaseList.length}</span>}
      </div>
      <div className="flex items-center relative justify-between text-2xl my-3">
        <h3 className=" font-bold">
          {!checkout ? "Our Products" : "Your Cart"}
        </h3>
        {checkout && <strong>${totalPrice.toFixed(2)}</strong>}
      </div>
      <div className="relative overflow-y-scroll h-[calc(100%-135px)] no-scrollbar">
        {!checkout && (
          <ul>
            {productList.map((product) => {
              const isInCart = purchaseList.includes(product);
              return (
                <li key={product.id} className="mt-4">
                  <Product
                    isInCart={isInCart}
                    onAddToCartClick={onAddToCart}
                    product={product}
                  />
                </li>
              );
            })}
          </ul>
        )}

        {checkout && (
          <ul>
            {purchaseList.map((purchase, index) => (
              <li key={index} className="mt-6">
                <OrderItem
                  onRemoveButtonClick={onRemoveButtonClick}
                  purchase={purchase}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

Cart.propTypes = {
  checkout: PropTypes.bool,
  onAddToCart: PropTypes.func,
  purchaseList: PropTypes.array,
  onRemoveButtonClick: PropTypes.func,
};
