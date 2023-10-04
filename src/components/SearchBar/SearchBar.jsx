import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function SearchBar() {
    return (
        <>
        <div className="w-full pt-12 px-96 mt-96 bottom-72 flex items-center justify-center absolute">
            <div className=" w-full h-20 px-8 py-6 bg-white shadow items-center inline-flex flex-row">
                <div className="text-start text-stone-300 text-l font-normal flex-grow">Search your product</div>
                <SearchOutlinedIcon className=" fill-stone-300"/>
            </div>
        </div>
        </>
    )
}

export default SearchBar