import React from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import Image from 'next/image';
import BackToHome from '@/components/BackToHome';

function ProductDetails() {
    return (

        <div className="w-full h-full flex flex-col py-[80px] gap-5">
            <BackToHome/>
            <div className="flex flex-row gap-10">
                <div className="flex flex-col gap-4 items-center">
                    <div className='h-[463px] w-[536px] bg-orange-100 rounded-2xl flex items-center justify-center'>
                    <Image src="https://picsum.photos/520/450" alt="Brand Photo 2" width={520} height={450} className='rounded-xl' />
                    </div>
                    <div className="flex flex-row w-full justify-between gap-4 items-center">
                        <button type='button' className='bg-orange-100 rounded-full w-[40px] h-[40px] flex items-center justify-center text-orange-600 hover:text-orange-100 hover:bg-orange-600 transition-colors duration-200'>
                            <ArrowBackOutlinedIcon />
                        </button>
                        <div className='h-[117px] w-[136px] bg-orange-100 rounded-2xl flex items-center justify-center'>
                            <Image src="https://picsum.photos/130/100" alt="Brand Photo 2" width={100} height={130} className="rounded-lg" />
                        </div>
                        <div className='h-[117px] w-[136px] bg-orange-100 rounded-2xl flex items-center justify-center'>
                            <Image src="https://picsum.photos/130/100" alt="Brand Photo 2" width={100} height={130} className="rounded-lg" />
                        </div>
                        <div className='h-[117px] w-[136px] bg-orange-100 rounded-2xl flex items-center justify-center'>
                            <Image src="https://picsum.photos/130/100" alt="Brand Photo 2" width={100} height={130} className="rounded-lg" />
                        </div>
                        <button type='button' className='bg-orange-100 text-orange-600 hover:text-orange-100 hover:bg-orange-600 transition-colors duration-200 rounded-full w-[40px] h-[40px] flex items-center justify-center'>
                            <ArrowForwardOutlinedIcon />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-0">
                        <div className="flex flex-row gap-2 items-center">
                            <h2 className=' text-3xl'>Apple iPhone 13 (128GB)</h2>
                            <div className='w-[152px] h-[40px] bg-orange-100 rounded-lg flex items-center justify-center'>
                                <span className='text-orange-600 text-lg'>Starlight</span>
                            </div>
                        </div>
                        <span className="font-light text-lg text-gray-300">24 in stock | %12.94 discount</span>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <Rating value={3.5} readOnly emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />} size="large" />
                        <span className="text-xl font-bold">4.5 <span className=' font-light text-gray-400 text-lg'>rating</span></span>
                    </div>
                    <div className="flex flex-row gap-2 items-start">
                        <span className='text-3xl text-gray-400'>$</span>
                        <span className='text-7xl'>500</span>
                    </div>
                    <ul className="flex flex-col gap-2">
                        <li className='flex flex-row gap-2 items-center'>
                            <CheckCircleOutlineOutlinedIcon className='w-[30px] h-[30px]' />
                            <span className='text-lg font-light'>An apple mobile which is nothing like apple</span>
                        </li>
                        <li className='flex flex-row gap-2 items-center'>
                            <CheckCircleOutlineOutlinedIcon className='w-[30px] h-[30px]' />
                            <span className='text-lg font-light'>Brand: Apple</span>
                        </li>
                        <li className='flex flex-row gap-2 items-center'>
                            <CheckCircleOutlineOutlinedIcon className='w-[30px] h-[30px]' />
                            <span className='text-lg font-light'>Category: Smartphones</span>
                        </li>
                        <li className='flex flex-row gap-2 items-center'>
                            <CheckCircleOutlineOutlinedIcon className='w-[30px] h-[30px]' />
                            <span className='text-lg font-light'>94 in stock</span>
                        </li>
                    </ul>
                    <div className='flex flex-row gap-2'>
                        <button type="button" className='h-[44px] w-[226px] bg-orange-600 text-white p-[14px] rounded-lg text-center hover:bg-orange-700 transition-colors duration-200'>
                            <span>Buy it now</span>
                        </button>
                        <button type="button" className='h-[44px] w-[226px] bg-orange-100 text-orange-600 p-[14px] rounded-lg text-center hover:text-orange-500 hover:bg-orange-200 transition-colors duration-200'>
                            <span>Add to cart</span>
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="w-[1227px] h-[701px]">
                <div className="fixed w-[1227px] h-[701px] top-0 left-0">
                    <div className="absolute w-[1233px] h-[603px] top-[98px] left-0">
                        <div className="absolute w-[536px] h-[603px] top-0 left-0">
                            <div className="absolute w-[536px] h-[603px] top-0 left-0">
                                <div className="absolute w-[536px] h-[480px] top-0 left-0">
                                    <div className="w-[536px] h-[463px] bg-[#e6f0fb] rounded-[24px] absolute top-0 left-0" />
                                    <img
                                        className="w-[480px] h-[480px] top-0 left-[28px] mix-blend-multiply absolute object-cover"
                                        alt="Image"
                                        src="image-15.png"
                                    />
                                </div>
                                <div className="absolute w-[536px] h-[120px] top-[483px] left-0">
                                    <div className="absolute w-[536px] h-[40px] top-[41px] left-0">
                                        <div className="absolute w-[40px] h-[40px] top-0 left-[496px] rotate-[-180.00deg]">
                                            <div className="relative h-[40px] rounded-[20px]">
                                                <div className="absolute w-[40px] h-[40px] top-0 left-0 bg-[#0064d2] rounded-[20px] opacity-10" />
                                                <img
                                                    className="absolute w-[24px] h-[24px] top-[8px] left-[8px] rotate-[180.00deg]"
                                                    alt="Li arrow right"
                                                    src="image.svg"
                                                />
                                            </div>
                                        </div>
                                        <div className="absolute w-[40px] h-[40px] top-0 left-0">
                                            <div className="relative h-[40px] rounded-[20px]">
                                                <div className="absolute w-[40px] h-[40px] top-0 left-0 bg-[#0064d2] rounded-[20px] opacity-10" />
                                                <img
                                                    className="absolute w-[24px] h-[24px] top-[8px] left-[8px]"
                                                    alt="Li arrow right"
                                                    src="li-arrow-right-2.svg"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="absolute w-[422px] h-[120px] top-0 left-[57px]">
                                        <div className="relative h-[120px]">
                                            <div className="absolute w-[422px] h-[120px] top-0 left-0 opacity-10">
                                                <div className="absolute w-[130px] h-[120px] top-0 left-0 bg-[#0064d2] rounded-[24px]" />
                                                <div className="absolute w-[130px] h-[120px] top-0 left-[146px] bg-[#0064d2] rounded-[24px]" />
                                                <div className="absolute w-[130px] h-[120px] top-0 left-[292px] bg-[#0064d2] rounded-[24px]" />
                                            </div>
                                            <img
                                                className="w-[96px] h-[101px] top-[19px] left-[309px] absolute object-cover"
                                                alt="Image"
                                                src="image-16.png"
                                            />
                                        </div>
                                    </div>
                                    <img
                                        className="w-[137px] h-[117px] top-[3px] left-[54px] mix-blend-multiply absolute object-cover"
                                        alt="Image"
                                        src="image-18.png"
                                    />
                                </div>
                            </div>
                            <img
                                className="absolute w-[114px] h-[26px] top-[530px] left-[219px] object-cover"
                                alt="Camera system"
                                src="camera-system-rp945vhdfsiu-large-1.png"
                            />
                        </div>
                        <div className="flex w-[226px] h-[44px] items-center justify-center gap-[9px] p-[14px] absolute top-[419px] left-[577px] bg-[#0064d2] rounded-[10px]">
                            <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-white text-[16px] tracking-[0] leading-[normal]">
                                Buy it now
                            </div>
                        </div>
                        <button className="flex w-[226px] h-[44px] items-center justify-center gap-[9px] p-[14px] absolute top-[419px] left-[819px] bg-[#0064d21a] rounded-[10px] all-[unset] box-border">
                            <div className="relative w-fit mt-[-5.00px] mb-[-3.00px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#0064d2] text-[16px] tracking-[0] leading-[normal]">
                                Add to Cart
                            </div>
                        </button>
                        <div className="absolute w-[549px] h-[73px] top-[6px] left-[573px]">
                            <div className="absolute w-[154px] h-[40px] top-[4px] left-[395px]">
                                <div className="relative w-[152px] h-[40px] rounded-[11px]">
                                    <div className="w-[152px] h-[40px] bg-[#0064d2] rounded-[11px] opacity-10 absolute top-0 left-0" />
                                    <div className="absolute top-[5px] left-[33px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#0064d2] text-[20px] tracking-[0] leading-[normal]">
                                        Starlight
                                    </div>
                                </div>
                            </div>
                            <div className="absolute w-[498px] h-[73px] top-0 left-0">
                                <p className="absolute w-[387px] top-0 left-0 [font-family:'Poppins-Medium',Helvetica] font-medium text-transparent text-[32px] tracking-[0] leading-[normal]">
                                    <span className="text-[#2f294d]">Apple iPhone 13 (128GB)&nbsp;&nbsp; </span>
                                    <span className="text-[#0064d2]">
                                        &nbsp;&nbsp;
                                        <br />
                                    </span>
                                </p>
                                <p className="absolute w-[498px] top-[49px] left-0 opacity-50 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#2f294d] text-[16px] tracking-[0] leading-[normal]">
                                    Free 2 Days Shipping | 1 Year Warranty
                                </p>
                            </div>
                        </div>
                        <div className="absolute w-[103px] h-[66px] top-[135px] left-[577px]">
                            <div className="relative w-[107px] h-[66px]">
                                <div className="absolute top-0 left-[18px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#2f294d] text-[44px] tracking-[0] leading-[normal]">
                                    580
                                </div>
                                <div className="absolute top-[7px] left-0 opacity-70 [font-family:'Poppins-Medium',Helvetica] font-medium text-[#2f294d] text-[24px] tracking-[0] leading-[normal]">
                                    $
                                </div>
                            </div>
                        </div>
                        <div className="absolute w-[533px] h-[24px] top-[202px] left-[582px]">
                            <img className="absolute w-[23px] h-[23px] top-0 left-0" alt="Check mark" src="check-mark-1.svg" />
                            <div className="absolute w-[498px] top-0 left-[33px] [font-family:'Poppins-Regular',Helvetica] font-normal text-main-color text-[16px] tracking-[0] leading-[normal]">
                                Free Return
                            </div>
                        </div>
                        <img
                            className="absolute w-[23px] h-[23px] top-[242px] left-[582px]"
                            alt="Check mark"
                            src="check-mark-2.svg"
                        />
                        <p className="absolute w-[498px] top-[242px] left-[615px] [font-family:'Poppins-Regular',Helvetica] font-normal text-main-color text-[16px] tracking-[0] leading-[normal]">
                            Chat with us 24 hours
                        </p>
                        <div className="absolute w-[533px] h-[24px] top-[282px] left-[582px]">
                            <img className="absolute w-[23px] h-[23px] top-0 left-0" alt="Check mark" src="check-mark-2-2.svg" />
                            <div className="absolute w-[498px] top-0 left-[33px] [font-family:'Poppins-Regular',Helvetica] font-normal text-main-color text-[16px] tracking-[0] leading-[normal]">
                                Comes with a Package
                            </div>
                        </div>
                        <div className="absolute w-[533px] h-[24px] top-[320px] left-[582px]">
                            <img className="absolute w-[23px] h-[23px] top-0 left-0" alt="Check mark" src="check-mark-2-3.svg" />
                            <div className="absolute w-[498px] top-0 left-[33px] [font-family:'Poppins-Regular',Helvetica] font-normal text-main-color text-[16px] tracking-[0] leading-[normal]">
                                Comes with a Package
                            </div>
                        </div>
                        <div className="absolute w-[346px] h-[32px] top-[95px] left-[573px]">
                            <div className="absolute w-[196px] h-[32px] top-0 left-0">
                                <img className="left-[4px] absolute w-[25px] h-[24px] top-[3px]" alt="Star" src="star-1.svg" />
                                <img className="left-[36px] absolute w-[25px] h-[24px] top-[3px]" alt="Star" src="star-2.svg" />
                                <img className="left-[68px] absolute w-[25px] h-[24px] top-[3px]" alt="Star" src="star-3.svg" />
                                <img className="left-[100px] absolute w-[25px] h-[24px] top-[3px]" alt="Star" src="star-4.svg" />
                                <img className="left-[132px] absolute w-[25px] h-[24px] top-[3px]" alt="Star" src="star-5.svg" />
                                <div className="absolute top-[4px] left-[168px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#2f294d] text-[16px] tracking-[0] leading-[normal]">
                                    4.5
                                </div>
                            </div>
                            <div className="absolute top-[4px] left-[204px] opacity-50 [font-family:'Poppins-Regular',Helvetica] font-normal text-[#2f294d] text-[16px] tracking-[0] leading-[normal]">
                                from 392 Reviews
                            </div>
                        </div>
                        <div className="absolute w-[642px] h-[40px] top-[359px] left-[585px]">
                            <div className="absolute w-[136px] h-[40px] top-0 left-0">
                                <div className="relative h-[40px]">
                                    <img
                                        className="left-0 absolute w-[40px] h-[40px] top-0 object-cover"
                                        alt="Ellipse"
                                        src="ellipse-10.png"
                                    />
                                    <img
                                        className="left-[24px] absolute w-[40px] h-[40px] top-0 object-cover"
                                        alt="Ellipse"
                                        src="ellipse-11.png"
                                    />
                                    <img
                                        className="left-[48px] absolute w-[40px] h-[40px] top-0 object-cover"
                                        alt="Ellipse"
                                        src="ellipse-12.png"
                                    />
                                    <img
                                        className="left-[72px] absolute w-[40px] h-[40px] top-0 object-cover"
                                        alt="Ellipse"
                                        src="ellipse-13.png"
                                    />
                                    <img
                                        className="left-[96px] absolute w-[40px] h-[40px] top-0 object-cover"
                                        alt="Ellipse"
                                        src="ellipse-14.png"
                                    />
                                </div>
                            </div>
                            <div className="absolute w-[500px] h-[24px] top-[8px] left-[144px]">
                                <p className="absolute w-[498px] top-0 left-0 [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-[#0064d2] text-[16px] tracking-[0] leading-[normal]">
                                    1,241 Sold in the last 24 hours
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default ProductDetails