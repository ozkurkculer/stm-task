import React from 'react'
import Image from 'next/image'


function Footer() {
  return (
    <>
      <div className="w-full h-80 bottom-0 flex flex-col bg-orange-50 justify-center items-center">
        <div className="px-40 py-10 w-full flex flex-row">
          <div className="flex-col justify-start items-start gap-3 flex flex-grow">
            <Image src="/images/ctclogo.png" alt="CTC Logo" width={180} height={84} />
            <div className="w-48 text-slate-800 text-l font-normal leading-loose">Büyükkayacık, Ankara Cd. No:292, 42250 Büyükkayacık Osb/Selçuklu/Konya</div>
          </div>
          <div className=" flex-col justify-start items-start gap-4 inline-flex flex-grow">
            <div className="text-slate-800 text-xl font-bold leading-loose">Quick links</div>
            <div className="text-slate-800 text-xl font-normal">Products</div>
            <div className="text-slate-800 text-xl font-normal">About us</div>
            <div className="text-slate-800 text-xl font-normal">Shopping Cart</div>
          </div>
          <div className=" flex-col justify-start items-start gap-4 inline-flex flex-grow">
            <div className="text-slate-800 text-xl font-bold leading-loose">Policy</div>
            <div className="text-slate-800 text-xl font-normal">Terms & Conditions</div>
            <div className="text-slate-800 text-xl font-normal">Privacy policy</div>
          </div>
          <div className=" flex-col justify-start items-start gap-4 inline-flex flex-grow">
            <div className="text-slate-800 text-xl font-bold leading-loose">Social</div>
            <div className="text-slate-800 text-xl font-normal">Facebook</div>
            <div className="text-slate-800 text-xl font-normal">Instagram</div>
            <div className="text-slate-800 text-xl font-normal">LinkedIn</div>
          </div>
        </div>
        <div className=" text-slate-800 text-sm font-normal">Copyright ©2023 Şehir Teknolojileri Ofisi | All right reserved.</div>
      </div>
    </>
  )
}

export default Footer