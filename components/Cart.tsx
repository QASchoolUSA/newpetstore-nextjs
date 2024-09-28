import React from 'react';
import { CartItem } from '@/types/globals';
import { useCart } from '@/app/context/CartContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { List, ListItem } from '@/components/List'; 


interface CartProps {
    items: CartItem[];
    onAdd: (item: CartItem) => void;
    onRemove: (id: string) => void;
    onIncreaseQuantity: (id: string) => void;
    onDecreaseQuantity: (id: string) => void;
    onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ items, onAdd, onRemove, onIncreaseQuantity, onDecreaseQuantity, onCheckout }) => {
  const { cartItems, removeFromCart } = useCart();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  if (cartItems.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Cart</CardTitle>
      </CardHeader>
      <CardContent>
        <List>
          {cartItems.map((item) => (
            <ListItem key={item.id}>
              <div className="flex items-center">
                <img src={item.imageUrl} alt={item.title} className="w-16 h-16 mr-4" />
                <div>
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                </div>
              </div>
              <div className="flex items-center">
                <p className="text-lg font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                <Button variant="destructive" className="ml-4" onClick={() => removeFromCart(item.id)}>
                  Remove
                </Button>
              </div>
            </ListItem>
          ))}
        </List>
        <div className="flex justify-between items-center mt-4">
          <p className="text-2xl font-bold">Total: ${calculateTotal()}</p>
          <Button className="ml-4">Checkout</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Cart;