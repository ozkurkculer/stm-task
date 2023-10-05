import React from 'react'
import BackToHome from '@/components/BackToHome'
import ProductCard from '@/components/ProductCard'

function Products() {
    return (
        <div className="w-full h-full flex flex-col py-[80px] gap-5">
            <BackToHome />
            <h1 className='text-3xl font-bold text-orange-600'>All Products</h1>
            <div className="flex flex-row items-center gap-[25px] flex-wrap justify-center">
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default Products