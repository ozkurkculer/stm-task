"use client"
import BackToHome from '@/components/BackToHome'
import React, { useEffect, useState } from 'react'
import CartItem from '@/components/CartItem'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import productUIService from '@/services/productUI.service';

function ShoppingCart() {

  const [totalCost, setTotalCost] = useState(0);
  const [data, setData] = useState([]);
  const [products, setProducts] = useState(``);

  useEffect(() => {
    getData();

    cartProducts();

  }, [])

  const cartProducts = async () => {

    const tempProducts = data.map(async (data, index) => {
      const productDetail = productUIService.takeProductDetail(data.id);
      return <CartItem data={productDetail} key={index} />
    })
    setProducts(tempProducts)

    console.log(products);
  }

  const getData = () => {

    setData(productUIService.takeCartProducts());
    console.log(data);

    const cost = productUIService.takeCartTotalCost();
    setTotalCost(cost);
  }


  return (
    <>
      <div className="w-full h-full flex flex-col py-[80px] gap-5 px-page">
        <BackToHome />
        <div className="flex flex-row items-center" >
          <span className='text-xl flex-grow'>Cart Summary</span>
          <div className="flex flex-row gap-2 items-center">
            <span>Total Cost:</span>
            <span className='text-orange-600 font-semibold'>$ {totalCost}</span>
            <button className="flex flex-row items-center justify-center py-1 px-3 text-orange-600 rounded-lg bg-orange-100 hover:text-orange-100 hover:bg-orange-600 transition-colors duration-200 text-sm gap-2">
              <FileDownloadOutlinedIcon className='w-[20px]' />
              <span>Download</span>
            </button>
          </div>
        </div>
        <hr />
        <ul className='flex flex-col gap-2'>
          {products}
        </ul>
      </div >
    </>
  )
}

export default ShoppingCart