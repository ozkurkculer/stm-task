"use client"
import React, { useState, useEffect } from 'react'
import BackToHome from '@/components/BackToHome'
import ProductCard from '@/components/ProductCard'
import productUIService from '@/services/productUI.service';

function Products() {
    const [products, setProducts] = useState(``);
    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts();
    }, [])

    const getProducts = async () => {
        const data = await productUIService.takeProducts();
        setData(data);
        console.log(data[0].images[0]);
        setProducts(data.map((data, index) => {
            return <ProductCard data={data} key={index} />
        }))
    }

    return (
        <div className="w-full h-full flex flex-col py-[80px] gap-5 px-page">
            <BackToHome />
            <h1 className='text-3xl font-bold text-orange-600'>All Products</h1>
            <div className="flex flex-row items-center gap-[25px] flex-wrap justify-center">
                {products}
            </div>
        </div>
    )
}

export default Products