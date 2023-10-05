import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchBar() {
    return (
        <>
            <div className=" w-full h-20 px-8 py-6 bg-white drop-shadow-[0_0_40px_rgba(0,0,0,12%)] items-center inline-flex flex-row">
                <div className="text-start text-stone-300 text-l font-normal flex-grow">Search your product</div>
                <SearchOutlinedIcon className=" fill-stone-300" />
            </div>
        </>
    )
}

export default SearchBar