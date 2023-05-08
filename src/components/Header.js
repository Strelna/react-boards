import React from "react";
function Header() {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img width={40} height={40} src="/img/logo.png" alt="logo" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Shop of the best shoes</p>
        </div>
      </div>
      <ul className="d-flex">
        <li className="mr-20">
          <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          <span>50 USD</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}

export default Header;
