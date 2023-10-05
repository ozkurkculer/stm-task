"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import Products from "@/pages/Products";
import ShoppingCart from "@/pages/ShoppingCart";
import { Route, Routes, BrowserRouter } from "react-router-dom";


export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Header />
        <div className="mt-[80px] px-page">
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="cart-details" element={<ShoppingCart />} />
            <Route path="products" element={<Products />} />
          </Route>
        </div>
        <Footer />
      </Routes>
    </BrowserRouter>
  );
}
