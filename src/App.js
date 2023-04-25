function App() {
  return (
    <div className="wrapper clear">
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
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
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
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
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
              <img
                className="removeBtn"
                src="/img/btn-remove.svg"
                alt="Remove"
              />
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

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Shop of the best shoes</p>
          </div>
        </div>
        <ul>
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span>50 USD</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All shoes</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />

            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favourite">
              <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers1.jpg"
              alt="Sneakers"
            />
            <h5>Sneakers for Men Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>25 USD</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers2.jpg"
              alt="Sneakers"
            />
            <h5>Sneakers for Men Nike Air Max 270</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>30 USD</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers3.jpg"
              alt="Sneakers"
            />
            <h5>Sneakers for Men Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>40 USD</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/sneakers4.jpg"
              alt="Sneakers"
            />
            <h5>Puma X Aka Boku Future Rider</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price:</span>
                <b>60 USD</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
