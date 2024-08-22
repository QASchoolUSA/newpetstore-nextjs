import React from 'react';

// Define the type for the product
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

async function fetchProduct(id: string): Promise<Product | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}api/products/${id}`);

  if (!res.ok) {
    return null;
  }
  return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <p className="text-xl text-gray-700 mb-2">Price: ${product.price.toFixed(2)}</p>
      <p className="text-md text-gray-500">Category: {product.category}</p>
      <p className="text-md text-gray-500 mt-4">
        Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}
