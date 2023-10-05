"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import Products from "@/pages/Products";
import ShoppingCart from "@/pages/ShoppingCart";


export default function Home() {
  return (
    <>
      <Header />
      <div className="mt-[80px] px-page">
        <HomePage />
        {/* <ProductDetails /> */}
        {/* <ShoppingCart /> */}
        {/* <Products/> */}
      </div>
      <Footer />
    </>
  );
}
