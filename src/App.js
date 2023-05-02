import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  {
    title: "Sneakers for Men Nike Air Max 270",
    price: 30,
    imageUrl: "/img/sneakers/sneakers1.jpg",
  },
  {
    title: "Sneakers for Men Nike Blazer Mid Suede",
    price: 40,
    imageUrl: "/img/sneakers/sneakers2.jpg",
  },
  {
    title: "Sneakers for Men Nike Air Max 270",
    price: 30,
    imageUrl: "/img/sneakers/sneakers3.jpg",
  },
  {
    title: "Puma X Aka Boku Future Rider",
    price: 25,
    imageUrl: "/img/sneakers/sneakers4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />

      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All shoes</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />

            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
