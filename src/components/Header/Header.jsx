"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Link from 'next/link';
import productUIService from '@/services/productUI.service';

function Header() {
  const [cartSize, setCartSize] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const size = productUIService.takeCartSize();
    setCartSize(size);

    const cost = productUIService.takeCartTotalCost();
    setTotalCost(cost);

    productUIService.takeCartProducts();
  

  }, [])
  

  return (
    <div className="w-full fixed top-0 z-50 h-[80px]">
      <div className="w-full h-full flex flex-row gap-10 bg-white shadow left-0 top-0 absolute px-36 items-center">
      <div className="mx-28 h-full flex flex-col justify-center">
      <Image src="/images/ctclogo.png" alt="CTC Logo" width={90} height={42} className=' max-w-[inherit]' />
      </div>
        <div className="gap-10 flex flex-row flex-grow w-full justify-center">
          <Link href='/' className="text-slate-800 text-base font-normal">
            Home
          </Link>
          <Link href='/products' className="text-slate-800 text-base font-normal">
            Products
          </Link>
        </div>
        <div className="flex flex-row items-center gap-7 mx-24">
          <Link href="/shopping-cart" className="flex flex-row whitespace-nowrap gap-5 items-center">
            <div>
              <div className="w-5 h-5 bg-orange-600 rounded-full border-2 border-white absolute ml-3 -mt-2 justify-start">
                <span className="text-xs absolute ml-[3px] -mt-1/2 text-white">{cartSize}</span>
              </div>
              <ShoppingCartOutlinedIcon color='black' />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm">My Cart</span>
              <span className="text-xs font-semibold text-orange-700"> $ {totalCost}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header;