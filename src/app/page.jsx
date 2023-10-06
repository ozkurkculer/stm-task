"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/pages/home";



export default function Home() {
  return (
    <>
      <Header />
      <div className="mt-[80px]">
        <HomePage />
      </div>
      <Footer />
    </>
    // <MyApp />
  );
}
