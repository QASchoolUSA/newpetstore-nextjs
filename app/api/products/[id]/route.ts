import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data/products';


export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const id = parseInt(params.id, 10); // Extract the id from params and convert to a number
  
    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 });
    }
  
    const product = products.find((p) => p.id === id);
  
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
  
    return NextResponse.json(product);
  }