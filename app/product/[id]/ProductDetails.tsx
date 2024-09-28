"use client"

import React from 'react';
import { useCart } from '../../context/CartContext';
import { Product, CartItem } from '@/types/globals';
import { Button } from '@/components/ui/button';

const ProductDetails: React.FC<{ product: Product }> = ({ product }) => {
	const { addToCart, cartItems } = useCart();

	const handleAddToCart = () => {
		const item: CartItem = {
			id: product.id,
			title: product.attributes.title,
			price: product.attributes.price,
			quantity: 1, // This will be handled by the addToCart function
			imageUrl: product.attributes.image?.data[0]?.attributes?.formats?.small?.url
				? `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${product.attributes.image.data[0].attributes.formats.small.url}`
				: '',
		};
		addToCart(item);
	};

	const itemInCart = cartItems.find(item => item.id === product.id);

	return (
		<div>
			{/* ... (other product details) */}
			<Button onClick={handleAddToCart}>
				{itemInCart ? `Add Another (${itemInCart.quantity} in cart)` : 'Add to Cart'}
			</Button>
		</div>
	);
};

export default ProductDetails;