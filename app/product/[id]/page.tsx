import { notFound } from 'next/navigation';
import { Product } from '@/types/globals';
import React from 'react';
import ProductDetails from './ProductDetails';

async function getProduct(id: string): Promise<Product | null> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/products/${id}`, {
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    },
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error('Unable to retrieve a product.');
  }

  const json = await res.json();
  return json.data;
}

const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />
};

export default ProductPage;