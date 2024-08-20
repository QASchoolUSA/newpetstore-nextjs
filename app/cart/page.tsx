import React from 'react';

const CartPage = () => {
  // Example of a cart with mock data
  const cartItems = [
    { id: 1, name: 'Product 1', price: 29.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 39.99, quantity: 1 },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-4">
              <span>{item.name}</span>
              <span>{item.quantity} x ${item.price.toFixed(2)}</span>
            </div>
          ))}
          <div className="text-right font-bold">
            <span>Total: ${total.toFixed(2)}</span>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;