import React from "react";

function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 cu-p">
          Your cart
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className="items">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-10 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price}USD</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Total:</span>
                  <div></div>
                  <b>60 USD</b>
                </li>
                <li>
                  <span>Tax 5%</span>
                  <div></div>
                  <b>3 USD</b>
                </li>
              </ul>
              <button className="greenButton">
                Make an order
                <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img
              className="mb-20"
              width="120px"
              height="120px"
              src="/img/empty-cart.jpg"
              alt="empty cart"
            />
            <h2>Empty Cart</h2>
            <p className="opacity-6">Add at least one item</p>
            <button onClick={onClose} className="greenButton">
              <img src="/img/arrow-back.svg" alt="Arrow" /> Return back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
