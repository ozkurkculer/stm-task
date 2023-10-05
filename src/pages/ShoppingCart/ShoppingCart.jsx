import BackToHome from '@/components/BackToHome'
import React from 'react'
import CartItem from '@/components/CartItem'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

function ShoppingCart() {
  return (
    <>
      <div className="w-full h-full flex flex-col py-[80px] gap-5">
        <BackToHome />
        <div className="flex flex-row items-center" >
          <span className='text-xl flex-grow'>Cart Summary</span>
          <div className="flex flex-row gap-2 items-center">
            <span>Total Cost:</span>
            <span className='text-orange-600 font-semibold'>$ 4.500</span>
            <button className="flex flex-row items-center justify-center p-1 text-orange-600 rounded-lg bg-orange-100 hover:text-orange-100 hover:bg-orange-600 transition-colors duration-200 text-sm gap-2">
              <FileDownloadOutlinedIcon className='w-[20px]'/>
              <span>Download</span>
            </button>
          </div>
        </div>
        <hr />
        <ul className='flex flex-col gap-2'>
          <CartItem />
          <CartItem />
          <CartItem />
        </ul>
      </div >
    </>
  )
}

export default ShoppingCart