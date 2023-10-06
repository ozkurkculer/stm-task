import React from 'react'
import Image from 'next/image'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

function CartItem() {
    return (
        <li className="w-full h-36 bg-white rounded-xl shadow-md flex flex-row p-5 gap-5 items-center" >
            <div className="bg-orange-100 w-[100px] h-[100px] rounded flex items-center justify-center">
                <Image src="https://picsum.photos/85/85" alt="Product Image" width={85} height={85} className=' max-w-[inherit]' />
            </div>
            <div className="flex flex-col gap-0 flex-grow">
                <div className="text-black font-semibold">iPhone 12 Charger</div>
                <div className="text-gray-400 font-light">Apple</div>
            </div>
            <div className="flex flex-row gap-5 items-center">
                <div className="flex items-center justify-center text-orange-600 font-semibold">
                    <span>13.90 $</span>
                </div>
                <button type="button" className='w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center text-red-600 hover:text-white hover:bg-red-600 transition-colors duration-200'>
                    <DeleteOutlineOutlinedIcon />
                </button>
            </div>

        </li>
    )
}

export default CartItem