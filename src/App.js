import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  fetch("https://645957564eb3f674df8dba51.mockapi.io/items")
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      setItems(json);
    });

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All shoes</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />

            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imageUrl={obj.imageUrl}
              onFavourite={() => console.log("Added to favourites")}
              onPlus={() => console.log("Pressed plus")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
