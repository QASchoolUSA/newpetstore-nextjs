import { NextRequest, NextResponse } from 'next/server';
import { products } from '@/data/products';

// Handle GET requests
export async function GET(request: NextRequest) {
  return NextResponse.json(products);
}
