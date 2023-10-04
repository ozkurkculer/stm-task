import React from 'react'
import Image from 'next/image'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function Header() {
  return (
    <div className="w-full h-full">
      <div className="w-full h-20 flex flex-row gap-10 bg-white shadow left-0 top-0 absolute px-36 items-center">
        <Image src="/images/ctclogo.png" alt="CTC Logo" width={90} height={42} />
        <div className="gap-10 flex flex-row flex-grow w-full justify-center">
          <div className="text-slate-800 text-base font-normal font-['Source Sans Pro']">
            Home
          </div>
          <div className="text-slate-800 text-base font-normal font-['Source Sans Pro']">
            About us
          </div>
          <div className="text-slate-800 text-base font-normal font-['Source Sans Pro']">
            Products
          </div>
          <div className="text-slate-800 text-base font-normal font-['Source Sans Pro']">
            Testimonial
          </div>
        </div>
        <div className="flex flex-row items-center gap-5 ">
          <div className="flex flex-row whitespace-nowrap gap-3 items-center">
            <div>
              <div className="w-5 h-5 bg-sky-600 rounded-full border-2 border-white absolute ml-3 -mt-2 justify-start">
                <span className="text-xs absolute ml-[3px] -mt-1/2 text-white">0</span>
                </div>
              <ShoppingCartOutlinedIcon color='black' />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm">My Cart</span>
              <span className="text-xs font-semibold text-sky-700"> $ 500</span>
            </div>
          </div>
          <div className="text-slate-800 text-base font-normal font-['Source Sans Pro']">
            Contact
          </div>
          <div className="bg-orange-500 justify-center items-center whitespace-nowrap px-5 py-2">
            <div className="text-white text-base font-normal ">
              Buy online
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;