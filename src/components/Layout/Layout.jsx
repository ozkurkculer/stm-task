import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "900", "800", "700", "600", "500"],
});


function Layout({ children }) {
  return (
    <>
    <div className={poppins.className}>
      <Header />
      <main className="mt-[80px]">{children}</main>
      <Footer />
    </div>
    </>
  )
}

export default Layout