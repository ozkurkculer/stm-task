import React from 'react'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import Image from 'next/image';

function ProductCard(props) {
    return (
        <button type='button' id={props.data.id} className="flex flex-col w-[250px] h-[300px] bg-white rounded-lg shadow-md text-left items-center p-4 gap-3 hover:bg-gray-100 transition-colors duration-200">
            <div className="bg-orange-100 rounded-md w-[225px] h-[175px] flex items-center justify-center">
                <Image src={props.data.thumbnail} alt="Product Image" width={200} height={160} className=' w-auto h-full rounded-md' />
            </div>
            <div className="flex flex-col gap-0 flex-grow justify-start w-full">
                <div className="text-black font-semibold text-sm">{props.data.title}</div>
                <div className="text-gray-400 font-light text-sm">{props.data.brand}</div>
            </div>
            <div className="flex flex-row justify-between w-full">
                <span className='font-semibold text-xl'>{props.data.price} $</span>
                <div className="flex flex-row gap-1 text-black items-center">
                    <StarOutlinedIcon className='fill-amber-400' />
                    <span className="text-sm font-semibold">{props.data.rating}</span>
                </div>
            </div>
        </button>
    )
}

export default ProductCard