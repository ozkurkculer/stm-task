import React from 'react'
import Image from 'next/image'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="w-full fixed top-0 z-50 h-[80px]">
      <div className="w-full h-full flex flex-row gap-10 bg-white shadow left-0 top-0 absolute px-36 items-center">
      <div className="mx-28 h-full flex flex-col justify-center">
      <Image src="/images/ctclogo.png" alt="CTC Logo" width={90} height={42} className=' max-w-[inherit]' />
      </div>
        <div className="gap-10 flex flex-row flex-grow w-full justify-center">
          <a href='/' className="text-slate-800 text-base font-normal">
            Home
          </a>
          <a href='/' className="text-slate-800 text-base font-normal">
            About us
          </a>
          <a href='/products' className="text-slate-800 text-base font-normal">
            Products
          </a>
        </div>
        <div className="flex flex-row items-center gap-7 ">
          <div className="flex flex-row whitespace-nowrap gap-5 items-center">
            <div>
              <div className="w-5 h-5 bg-orange-600 rounded-full border-2 border-white absolute ml-3 -mt-2 justify-start">
                <span className="text-xs absolute ml-[3px] -mt-1/2 text-white">0</span>
              </div>
              <ShoppingCartOutlinedIcon color='black' />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm">My Cart</span>
              <span className="text-xs font-semibold text-orange-700"> $ 500</span>
            </div>
          </div>
          <div className="text-slate-800 text-base font-normal font-['Source Sans Pro']">
            Contact
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;