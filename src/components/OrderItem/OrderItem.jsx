import PropTypes from "prop-types";

export default function OrderItem(props) {
  const { purchase, onRemoveButtonClick } = props;

  const handleRemoveOrder = (id) => {
    onRemoveButtonClick(id)
  }

  if(!purchase) return null
  return (
    <div className="flex items-center gap-5">
      <div className="w-[90px] flex items-center bg-[#22afdc] shrink-0 h-[90px] rounded-full">
        <img className="rotate-[-28deg]" src={purchase.imageUrl} alt="" />
      </div>
      <div className="flex-1">
        <h4 className="font-semibold">{purchase.name}</h4>
        <strong className="font-bold text-lg">${purchase.price}</strong>
        <div className="flex items-center gap-4 mt-2">
          <button type="button" className="w-[28px] h-[28px] rounded-full bg-[#eee] flex items-center justify-center">-</button>
          <span>1</span>
          <button type="button" className="w-[28px] h-[28px] rounded-full bg-[#eee] flex items-center justify-center">+</button>
          <button onClick={() => handleRemoveOrder(purchase.id)} type="button" className="w-[28px] h-[28px] ml-auto flex items-center justify-center bg-[#f6c90e] rounded-full">
            <img
              className="w-[16px] h-[16px]"
              alt=""
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALISURBVHic7Zs9bxNBEIYfgyUKAhhQUhDRICEBCh0fgkhBNIT8gPwZ6Gig5y8QCUhH5AqE3EZJgQRKEDSpKEAQkTMdcijGRvi8Z+/e3eze4X2kKe40t/Pu+LRfN4bIdNNQbLsJ3ATOFWznC7AJ/C6syCMngC3gsCTb7LdZGx5SXucH9kBD6BGNRoGrNWlTLQEa7R5VaFMtAbXBZwLWkVnHxtZ9iZr6N6Bp6TcHXAOOW/qfz7i36un5X8A28NXSfywrQJfypzVtS4D7ZSRgpwKdyWsfJnXOZincxf7VrxoJcHKcg80g2ClFShg6ZTQyD2xQr3GgC7yi+EYs8t+TZ329gKwJfiLzbRU4Cywh/fmuGegpw/PssmYwS5aAfURTD3ikFegKo4PNe61gDrxjWFMPuGj7sMte4JLh3mWH57VYSF03cDg7cEmAabxQ2aM7UkjX1O8GfSRgHmgjM8YO4wfOFWC379umYguZVcyrrkm0U/4JMGvwm2N0tblh0b5Jk+222csbcCd1PYOsI9KYzhvuqij6Bx8JMO0kZyz91HehcRAMLSA0MQGhBYQmJiC0gNDEBIQWEJqYgNACQhMTEFpAaGICQgsITUxAaAGhiQnwEMP0+axr6af+6c1HAjqp6wQpo02zxWhi3moIykveU+FBfUGCfEq7N8Z3GSlrSbD/vl/oVNiFvAnQpvLH4pUmJsDBN2tEDlnHn1UBZppljLgkYC/j/i2HNspmMeP+nkawY8ABowPOa41gFjSQaTKt5wDRqsKaIeAh8Bjd/x+laQBPMrQ80wy8iJSgmAK/QWpzW4rxW8gndNMvPyiPua0YH4DnGcGrYGuK/f7LGeBjgM5Nsl3gtGK/h7gAfFbukIt96mvySgt4WVB4UesBL4BTyn0dy42+iEGxog/bR8ai60XFlzl1NZFiyllknNDgB/ANKbaq1V9pI1XlD82w8ru3YIVHAAAAAElFTkSuQmCC"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

OrderItem.propTypes = {
  purchase: PropTypes.object,
  onRemoveButtonClick: PropTypes.func
};
