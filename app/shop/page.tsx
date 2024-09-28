import React from 'react';
import Link from 'next/link';


export default function ShopPage() {
  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-6">Shop by Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Dogs</h2>
          <ul className="list-disc ml-6">
            <li><Link href="/shop/dogs/food">Food</Link></li>
            <li><Link href="/shop/dogs/toys">Toys</Link></li>
            <li><Link href="/shop/dogs/beds">Beds</Link></li>
            <li><Link href="/shop/dogs/collars-leashes">Collars & Leashes</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Cats</h2>
          <ul className="list-disc ml-6">
            <li><Link href="/shop/cats/food">Food</Link></li>
            <li><Link href="/shop/cats/litter-accessories">Litter & Accessories</Link></li>
            <li><Link href="/shop/cats/scratching-posts">Scratching Posts</Link></li>
            <li><Link href="/shop/cats/toys">Toys</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Birds</h2>
          <ul className="list-disc ml-6">
            <li><Link href="/shop/dogs/food">Food</Link></li>
            <li><Link href="/shop/dogs/toys">Toys</Link></li>
            <li><Link href="/shop/dogs/beds">Beds</Link></li>
            <li><Link href="/shop/dogs/collars-leashes">Collars & Leashes</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Reptiles</h2>
          <ul className="list-disc ml-6">
            <li><Link href="/shop/dogs/food">Food</Link></li>
            <li><Link href="/shop/dogs/toys">Toys</Link></li>
            <li><Link href="/shop/dogs/beds">Beds</Link></li>
            <li><Link href="/shop/dogs/collars-leashes">Collars & Leashes</Link></li>
          </ul>
        </div>
      </div>
    </>

  );
}
