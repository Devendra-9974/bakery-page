import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import CartPage from "./components/CartPage";
import DeliveryPage from "./components/DeliveryPage";
import OrderPage from "./components/OrderPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfilePage from "./components/ProfilePage"; 
import { UserProvider } from './components/UserContext';
import "./App.css";

// Initial Products Data (Only the products you want to show)
const initialProductsData = [
  // Cakes
  {
    id: 4,
    name: "Chocolate Truffle Cake",
    description: "A rich and indulgent cake with layers of decadent chocolate truffle.",
    price: 1800.0,
    image: require("./assets/images/img/choco.jpg"),
    quantity: 15,
    category: "BirthdayCakes",
  },
  {
    id: 5,
    name: "Unicorn baby cake",
    description: "A creamy and tasty cake topped with fresh .",
    price: 1500.0,
    image: require("./assets/images/img/strawberry.jpg"),
    quantity: 8,
    category:  "BirthdayCakes",
  },
  {
    id: 6,
    name: "Butterfly Cake",
    description: "A dedicated art of beautiful butterfly cake with fresh ingredients.",
    price: 1400.0,
    image: require("./assets/images/img/mango.jpg"),
    quantity: 12,
    category:  "BirthdayCakes",
  },
  {
    id: 7,
    name: "Cute Penguine Cake",
    description: "Sweet Moments Start Here",
    price: 1100.0,
    image: require("./assets/images/img/vanila.jpg"),
    quantity: 20,
    category: "BirthdayCakes",
  },
  {
    id: 8,
    name: "Cake",
    description: "A moist carrot cake with cream , spiced just right.",
    price: 1300.0,
    image: require("./assets/images/img/carot.jpg"),
    quantity: 10,
    category:  "BirthdayCakes",
  },
  {
    id: 9,
    name: "Kitkat Cake",
    description: "A rich, kitkat cake with cream cheese frosting and a hint of cocoa.",
    price: 1600.0,
    image: require("./assets/images/img/velvet.jpg"),
    quantity: 9,
    category: "BirthdayCakes",
  },
  {
    id: 10,
    name: "Cute Bear Cake",
    description: "Sweet Moments Start Here",
    price: 1200.0,
    image: require("./assets/images/img/lemon.jpg"),
    quantity: 10,
    category:  "BirthdayCakes",
  },
  {
    id: 11,
    name: "Creamy Delight Cake",
    description:"Sweet Moments Start Here",
    price: 1400.0,
    image: require("./assets/images/img/pinde.jpg"),
    quantity: 8,
    category: "BirthdayCakes",
  },
  {
    id: 12,
    name: "Feather Cake",
    description: "Where every bite has its own story",
    price: 1350.0,
    image: require("./assets/images/img/coffee.jpg"),
    quantity: 12,
    category:  "BirthdayCakes",
  },

  // PartyCakes
  {
    id: 13,
    name: "Macaron - Pistachio",
    description: "A delicate macaron with a pistachio flavor.",
    price: 500.0,
    image: require("./assets/images/img/macr.jpg"),
    quantity: 25,
    category:"PartyCakes",
  },
  {
    id: 14,
    name: "Macaron - Raspberry",
    description: "A sweet macaron with raspberry flavor.",
    price: 450.0,
    image: require("./assets/images/img/mac.jpg"),
    quantity: 30,
    category: "PartyCakes",
  },  {
    id: 20,
    name: "Macaron - Lemon",
    description: "A tangy macaron with lemon filling.",
    price: 440.0,
    image: require("./assets/images/img/lemon.webp"),
    quantity: 18,
    category: "PartyCakes",
  },
  {
    id: 17,
    name: "Macaron - Salted Caramel",
    description: "A delicious macaron filled with salted caramel.",
    price: 490.0,
    image: require("./assets/images/img/sal.jpg"),
    quantity: 25,
    category:"PartyCakes",
  },
  {
    id: 16,
    name: "Macaron - Vanilla",
    description: "A classic macaron with a smooth vanilla filling.",
    price: 460.0,
    image: require("./assets/images/img/whit.webp"),
    quantity: 15,
    category: "PartyCakes",
  },
 
  {
    id: 18,
    name: "Macaron - Mango",
    description: "A tropical macaron filled with mango flavor.",
    price: 510.0,
    image: require("./assets/images/img/mango.webp"),
    quantity: 20,
    category: "PartyCakes",
  },
  {
    id: 19,
    name: "Macaron - Coffee",
    description: "A macaron with a rich coffee flavor.",
    price: 470.0,
    image: require("./assets/images/img/coffe.webp"),
    quantity: 22,
    category: "PartyCakes",
  },{
    id: 21,
    name: "Macaron - Pistachio-Rose",
    description: "A macaron with pistachio and rose flavor.",
    price: 550.0,
    image: require("./assets/images/img/ro.webp"),
    quantity: 20,
    category: "PartyCakes",
  },
  {
    id: 15,
    name: "Macaron - Chocolate",
    description: "A rich chocolate macaron with a creamy filling.",
    price: 480.0,
    image: require("./assets/images/img/macrr.jpg"),
    quantity: 20,
    category: "PartyCakes",
  },
  

  //FEstivalSpecial Cakes

  {
    id: 22,
    name: "Mango-Cake",
    description: "Fresh Mango Cake.",
    price: 350.0,
    image: require("./assets/images/img/mangoCake.jpg"),
    quantity: 20,
    category: "FestivalSpecial",
  }, {
    id: 27,
    name: "Chocolate-Gift box",
    description: "A aweful gift for special occasions",
    price: 470.0,
    image: require("./assets/images/img/mat.jpg"),
    quantity: 17,
    category: "FestivalSpecial",
  },

  {
    id: 23,
    name: "Janmastmi-Special",
    description: "Cake for the beautiful day of janmastmi.",
    price: 400.0,
    image: require("./assets/images/img/cho.jpg"),
    quantity: 15,
    category: "FestivalSpecial",
  },
  {
    id: 24,
    name: "Croissant - Almond",
    description: "Not Availble.",
    price: 420.0,
    image: require("./assets/images/img/almond.webp"),
    quantity: 18,
    // category: "FestivalSpecial",
  },  {
    id: 28,
    name: "Chocolate Bars",
    description: "Every bite filled with love.",
    price: 480.0,
    image: require("./assets/images/img/van.jpg"),
    quantity: 19,
    category: "FestivalSpecial",
  },
 
  {
    id: 26,
    name: "Croissant - Strawberry",
    description: "Chocolate bars filled with dry.",
    price: 440.0,
    image: require("./assets/images/img/cr.jpg"),
    quantity: 25,
    category: "FestivalSpecial",
  },
 
  {
    id: 29,
    name: "Chocolate",
    description: "Nutella chocolate",
    price: 460.0,
    image: require("./assets/images/img/le.jpg"),
    quantity: 20,
    category: "FestivalSpecial",
  },
  {
    id: 30,
    name: "Croissant - Caramel",
    description: "A croissant filled with caramel and a crunchy topping.",
    price: 500.0,
    image: require("./assets/images/img/c.webp"),
    quantity: 18,
    category: "FestivalSpecial",
  }, {
    id: 25,
    name: "Croissant - Raspberry",
    description: "A raspberry-filled croissant with a sweet glaze.",
    price: 450.0,
    image: require("./assets/images/img/st.jpg"),
    quantity: 22,
    category: "FestivalSpecial",
  },
];


function App() {
  useEffect(() => {
    localStorage.removeItem("products");
    localStorage.removeItem("cartItems");
    localStorage.removeItem("orders");

    localStorage.setItem("products", JSON.stringify(initialProductsData));
  }, []);

  const [products, setProducts] = useState(initialProductsData);
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

    setProducts((prevProducts) =>
      prevProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      const itemToRemove = prevItems.find((item) => item.id === id);
  
      // If the item is found in the cart, restore its quantity in the products list
      if (itemToRemove) {
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === id
              ? { ...product, quantity: product.quantity + itemToRemove.quantity }  // Add removed quantity
              : product
          )
        );
      }
  
      // Remove the item from the cart
      return prevItems.filter((item) => item.id !== id);
    });
  };
  

  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );

    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCheckout = (deliveryDetails) => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const newOrder = {
      items: cartItems,
      totalPrice,
      deliveryAddress: deliveryDetails.address,
      paymentMethod: deliveryDetails.paymentMethod,
      date: new Date().toLocaleString(),
    };

    setCartItems([]);
    localStorage.setItem("cartItems", JSON.stringify([]));
    alert("Order placed successfully!");
  };

  return (
    <UserProvider>
      
      <Router>
        <Header cartItems={cartItems} />
        <div className="App">
          <Routes>
            <Route 
            path="/" element={<HomePage />} />
            <Route
              path="/products"
              element={<ProductPage products={products} addToCart={addToCart} />}
            />
            <Route
              path="/products/:category"
              element={
                <ProductPage
                  products={products}
                  addToCart={addToCart}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <CartPage
                  cartItems={cartItems}
                  decrementQuantity={decrementQuantity}
                  incrementQuantity={incrementQuantity}
                  removeFromCart={removeFromCart}
                />
              }
            />
            <Route
              path="/delivery"
              element={
                <DeliveryPage
                  cartItems={cartItems}
                  totalPrice={totalPrice}
                  handleCheckout={handleCheckout}
                />
              }
            />
            <Route path="/orders" element={<OrderPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/"></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </UserProvider>
  );
}

export default App;