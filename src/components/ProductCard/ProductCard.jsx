import React from 'react'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Image from 'next/image';

function ProductCard() {
    return (
        <button type='button' className="flex flex-col w-[250px] h-[300px] bg-white rounded-lg shadow-md text-left items-center p-4 gap-3 hover:bg-gray-100 transition-colors duration-200">
            <div className="bg-orange-100 rounded-md w-[225px] h-[175px] flex items-center justify-center">
                <Image src="https://picsum.photos/210/160" alt="Product Image" width={200} height={160} className=' max-w-[inherit] rounded-sm' />
            </div>
            <div className="flex flex-col gap-0 flex-grow justify-start w-full">
                <div className="text-black font-semibold text-sm">iPhone 12 Charger</div>
                <div className="text-gray-400 font-light text-sm">Apple</div>
            </div>
            <div className="flex flex-row justify-between w-full">
                <span className='font-semibold text-xl'>13.90 $</span>
                <div className="flex flex-row gap-1 text-black items-center">
                    <StarOutlinedIcon className='fill-amber-400' />
                    <span className="text-sm font-semibold">4.5</span>
                </div>
            </div>
        </button>
    )
}

export default ProductCard