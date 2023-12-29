import classNames from "classnames";
import PropTypes from "prop-types";

export default function Product(props) {
  const { product, onAddToCartClick, isInCart } = props;

  const handleAddToCard = (product) => { 
    onAddToCartClick(product)
  }

  return (
    <>
      <div className="h-[380px] rounded-[30px] bg-[#e1e7ed] flex items-center overflow-hidden">
        <img
          className="block w-full filter drop-shadow-xl rotate-[-24deg]"
          alt={product.name}
          src={product.imageUrl}
        />
      </div>
      <div className="mt-3">
        <h4 className="font-bold text-xl">{product.name}</h4>
        <p className="mt-3 text-sm text-[#777] text-justify">{product.description}</p>
      </div>
      <div className="flex items-center justify-between mt-5">
        <strong>${product.price}</strong>
        <button onClick={() => handleAddToCard(product)} className={classNames(
          "h-[46px] bg-[#f6c90e] text-sm rounded-[100px] hover:shadow-lg transition-all uppercase px-[20px] py-16px font-bold box-border",
          {
            "pointer-events-none opacity-50": isInCart
          }
        )}>
          {
            !isInCart ? 'Add to cart' : 'added'
          }
        </button>
      </div>
    </>
  );
}

Product.propTypes = {
  product: PropTypes.object,
  onAddToCartClick: PropTypes.func,
  isInCart: PropTypes.bool
};
