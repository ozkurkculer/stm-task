import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePage from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";

export default function Home() {
  return (
    <>
      <Header />
      <div className="mt-[80px] px-page">
        {/* <HomePage /> */}
        <ProductDetails />
      </div>
      <Footer />
    </>
  );
}
