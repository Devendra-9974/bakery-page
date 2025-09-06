

// import React, { useEffect, useState } from "react";
// import emailjs from "@emailjs/browser"; // use latest package

// const OrderPage = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
//     setOrders(storedOrders);
//   }, []);

//   const sendOrderEmail = async (order) => {
//     const templateParams = {
//       order_number: order.id || "1",
//       order_date: order.date,
//       delivery_address: order.deliveryAddress,
//       payment_method: order.paymentMethod,
//       items: order.items.map((i) => `${i.name} x${i.quantity}`).join(", "),
//       total_price: order.totalPrice,
//       user_email: "customer@example.com", // replace with actual email
//     };

//     try {
//       const response = await emailjs.send(
//         process.env.REACT_APP_EMAILJS_SERVICE_ID,
//         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//         templateParams,
//         process.env.REACT_APP_EMAILJS_PUBLIC_KEY // only public key
//       );
//       console.log("Email sent successfully!", response.status, response.text);
//     } catch (error) {
//       console.error("Failed to send email:", error);
//     }
//   };

//   const handlePlaceOrder = () => {
//     if (orders.length === 0) {
//       alert("No orders to send!");
//       return;
//     }

//     orders.forEach((order) => sendOrderEmail(order));
//     alert("Order placed! Emails sent (check console for status).");
//   };

//   return (
//     <div className="order-page page-container">
//       <h2>All Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders placed yet.</p>
//       ) : (
//         <div className="order-summary">
//           {orders.map((order, index) => (
//             <div key={index} className="order-card">
//               <h3>
//                 Order {index + 1} - {order.date}
//               </h3>
//               <p>
//                 <strong>Delivery Address:</strong> {order.deliveryAddress}
//               </p>
//               <p>
//                 <strong>Payment Method:</strong> {order.paymentMethod}
//               </p>

//               <h4>Items</h4>
//               <ul>
//                 {order.items.map((item) => (
//                   <li key={item.id}>
//                     {item.name} - {item.quantity} x ₹{item.price}
//                   </li>
//                 ))}
//               </ul>

//               <p>
//                 <strong>Total Price:</strong> ₹{order.totalPrice}
//               </p>
//             </div>
//           ))}
//           <button onClick={handlePlaceOrder}>Place Order</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderPage;

// import React, { useEffect, useState } from "react";
// import emailjs from "@emailjs/browser";

// const OrderPage = () => {
//   const [orders, setOrders] = useState([]);
//   const [profile, setProfile] = useState({});

//   useEffect(() => {
//     const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
//     setOrders(storedOrders);

//     const storedProfile = JSON.parse(localStorage.getItem("profile")) || {};
//     setProfile(storedProfile);
//   }, []);

//   const sendOrderEmail = async (order) => {
//     const templateParams = {
//       order_number: order.id || "1",
//       order_date: order.date,
//       delivery_address: order.deliveryAddress,
//       payment_method: order.paymentMethod,
//       items: order.items.map((i) => `${i.name} x${i.quantity}`).join(", "),
//       total_price: order.totalPrice,
//       user_name: profile.name || "N/A",
//       user_email: profile.email || "N/A",
//       user_phone: profile.phone || "N/A",
//       user_address: profile.address || "N/A",
//     };

//     try {
//       const response = await emailjs.send(
//         process.env.REACT_APP_EMAILJS_SERVICE_ID,
//         process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//         templateParams,
//         process.env.REACT_APP_EMAILJS_PUBLIC_KEY
//       );
//       console.log("Email sent successfully!", response.status, response.text);
//     } catch (error) {
//       console.error("Failed to send email:", error);
//     }
//   };

//   const handlePlaceOrder = () => {
//     if (orders.length === 0) {
//       alert("No orders to send!");
//       return;
//     }

//     orders.forEach((order) => sendOrderEmail(order));
//     alert("Order placed! Emails sent (check console for status).");
//   };

//   return (
//     <div className="order-page page-container">
//       <h2>All Orders</h2>
//       {orders.length === 0 ? (
//         <p>No orders placed yet.</p>
//       ) : (
//         <div className="order-summary">
//           {orders.map((order, index) => (
//             <div key={index} className="order-card">
//               <h3>
//                 Order {index + 1} - {order.date}
//               </h3>
//               <p>
//                 <strong>Delivery Address:</strong> {order.deliveryAddress}
//               </p>
//               <p>
//                 <strong>Payment Method:</strong> {order.paymentMethod}
//               </p>

//               <h4>Items</h4>
//               <ul>
//                 {order.items.map((item) => (
//                   <li key={item.id}>
//                     {item.name} - {item.quantity} x ₹{item.price}
//                   </li>
//                 ))}
//               </ul>

//               <p>
//                 <strong>Total Price:</strong> ₹{order.totalPrice}
//               </p>
//             </div>
//           ))}
//           <button onClick={handlePlaceOrder}>Place Order</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderPage;



import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const OrderPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const sendOrderEmail = async (order, profileData) => {
    const templateParams = {
      order_number: order.id || "1",
      order_date: order.date,
      delivery_address: order.deliveryAddress,
      payment_method: order.paymentMethod,
      items: order.items.map((i) => `${i.name} x${i.quantity} - ₹${i.price}`).join("\n"),
      total_price: order.totalPrice,
      user_name: profileData.name || "N/A",
      user_email: profileData.email || "N/A",
      user_phone: profileData.phone || "N/A",
      user_address: profileData.address || "N/A",
      user_bio: profileData.bio || "N/A",
    };

    try {
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      console.log("Email sent successfully!", response.status, response.text);
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  const handlePlaceOrder = () => {
    const latestProfile = JSON.parse(localStorage.getItem("user")) || {};

    if (orders.length === 0) {
      alert("No orders to send!");
      return;
    }

    orders.forEach((order) => sendOrderEmail(order, latestProfile));
    alert("Order placed! Emails sent (check console for status).");
  };

  return (
    <div className="order-page page-container">
      <h2>All Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        <div className="order-summary">
          {orders.map((order, index) => (
            <div key={index} className="order-card">
              <h3>
                Order {index + 1} - {order.date}
              </h3>
              <p>
                <strong>Delivery Address:</strong> {order.deliveryAddress}
              </p>
              <p>
                <strong>Payment Method:</strong> {order.paymentMethod}
              </p>

              <h4>Items</h4>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.name} - {item.quantity} x ₹{item.price}
                  </li>
                ))}
              </ul>

              <p>
                <strong>Total Price:</strong> ₹{order.totalPrice}
              </p>
            </div>
          ))}
          <button onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default OrderPage;
