import React from "react";

function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 cu-p">
          Your cart
          <img
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/sneakers1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-10 flex">
              <p className="mb-5">Sneakers for Men Nike Blazer Mid Suede</p>
              <b>25 USD</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/sneakers1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-10 flex">
              <p className="mb-5">Sneakers for Men Nike Blazer Mid Suede</p>
              <b>25 USD</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
          <div className="cartItem d-flex align-center">
            <div
              style={{ backgroundImage: "url(/img/sneakers/sneakers1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="mr-10 flex">
              <p className="mb-5">Sneakers for Men Nike Blazer Mid Suede</p>
              <b>25 USD</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
          </div>
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
    </div>
  );
}

export default Drawer;
