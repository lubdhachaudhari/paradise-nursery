import { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";

function App() {
  const [page, setPage] = useState("home");

  if (page === "about") {
  return <AboutUs />;
}

if (page === "products") {
  return <ProductList />;
}

  return (
    <div className="landing-page">
      <div className="overlay">
        <div className="landing-content">

          <h1>Paradise Nursery</h1>

          <p>
            Bring nature closer to your home with beautiful plants.
          </p>

          <button
            className="get-started-btn"
            onClick={() => setPage("products")}
          >
            Get Started
          </button>

          <br />
          <br />

          <button
            className="get-started-btn"
            onClick={() => setPage("about")}
          >
            About Us
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;