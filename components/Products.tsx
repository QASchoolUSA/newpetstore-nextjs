import React from 'react';
import { products } from '../data/products';
import Link from 'next/link';

const Products = ({ category }: { category?: string }) => {
    const filteredProducts = category
        ? products.filter((product) => product.category === category)
        : products;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
                <div key={product.id} className="border p-4 rounded-lg">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover mb-4"
                    />
                    <Link href='#void'>
                        <h2 className="text-lg font-bold">{product.name}</h2>
                    </Link>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                    <Link href={`/products/${product.id}`} className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        View Product
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Products;