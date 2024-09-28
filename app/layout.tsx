import { ReactNode } from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from './context/CartContext';

export const metadata: Metadata = {
  title: "New Pet Store",
  description: "Buy quality pet products at affordable prices",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <Footer/ >
        </CartProvider>
      </body>
    </html>
  );
}