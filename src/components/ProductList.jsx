import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import CartItem from "./CartItem";

const products = [
  {
    id: 1,
    name: "Snake Plant",
    price: 499,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee"
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 399,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6"
  },
  {
    id: 3,
    name: "Money Plant",
    price: 299,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b"
  },
  {
    id: 4,
    name: "Aloe Vera",
    price: 349,
    category: "Medicinal Plants",
    image:
      "https://images.unsplash.com/photo-1596547609652-9cf5d8d236b8"
  },
  {
    id: 5,
    name: "Areca Palm",
    price: 599,
    category: "Outdoor Plants",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6"
  },
  {
    id: 6,
    name: "ZZ Plant",
    price: 449,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1632207691144-0f7f2f2f2f0e"
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    state => state.cart.items
  );

  const handleAddToCart = product => {
    dispatch(addItem(product));
  };

  return (
    <div className="products-container">

      <h1>Paradise Nursery</h1>

      <h2>Our Plants</h2>

      <div className="products-grid">

        {products.map(product => {

          const cartProduct = cartItems.find(
            item => item.id === product.id
          );

          return (
            <div
              className="product-card"
              key={product.id}
            >

              <img
                src={product.image}
                alt={product.name}
              />

              <h3>{product.name}</h3>

              <p>{product.category}</p>

              <p>₹{product.price}</p>

              <button
                onClick={() => handleAddToCart(product)}
              >
                {cartProduct
                  ? `Added (${cartProduct.quantity})`
                  : "Add to Cart"}
              </button>

            </div>
          );
        })}

      </div>
      <CartItem />

    </div>
  );
}

export default ProductList;