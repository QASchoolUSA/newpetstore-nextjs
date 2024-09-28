'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '../types/globals'
import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';

const Products = () => {
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/products?populate=*`, {
                headers: {
                    'Authorization': 'Bearer fa46add1111786e81f3ff8f153b74bf838c730d642a44c2ed833bf53fc3c41175fac9f69da6a30ae9992e97de9cf91984d4dd804d0eafdaa0070ad5ac60316006ed688702e27af3cb5b74df0632f68e9c6abb597b77e4f30919b7396f762b77a6335f6978d995020fead8e8b8f0450f8de3aca865bdb9b6c5176331f47375439'
                }
            });
            const { data } = await res.json();
            console.log(data);
            setProducts(data);
        }
        fetchProducts();
    }, []);

    return (
        <>
            <div className="card products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {products.map((product: Product) => (
                    <Card key={product.id} >
                        <Image className='container' src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${product.attributes.image.data[0].attributes.formats.small.url}`} alt={product.attributes.title} width={250} height={250} />
                        <CardHeader>
                            <CardTitle className='text-md font-bold text-center'>
                                <Link href={`/product/${product.id}`}>{product.attributes.title}</Link>
                            </CardTitle>
                            <CardDescription className='text-sm text-center'>{product.attributes.description}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                            <Button className='w-full' onClick={() => addToCart({
                                id: product.id,
                                title: product.attributes.title,
                                price: product.attributes.price,
                                quantity: 1,
                                imageUrl: product.attributes.image.data[0].attributes.formats.small.url
                            })}>Add to cart</Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </>
    )

}

export default Products;
