import React from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import Link from 'next/link';

function BackToHome() {
  return (
    <>
      <Link href="/" className='flex flex-row gap-5 items-center'>
        <button type='button' className='bg-orange-100 rounded-full w-[40px] h-[40px] flex items-center justify-center text-orange-600 hover:text-orange-100 hover:bg-orange-600 transition-colors duration-200'>
          <ArrowBackOutlinedIcon />
        </button>
        <span className="text-[#2f294d]">Back to home page</span>
      </Link>
      <hr />
    </>
  )
}

export default BackToHome