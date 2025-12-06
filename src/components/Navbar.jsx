import React, { useState } from 'react'
import { productdata } from '../data/productData';
const Navbar = ({ onSearch, handleSort }) => {
    const [text, setText] = useState("");
    const uniqueCategories = [...new Set(productdata.map(p => p.category))];
    const [selectedCattegories, setSelectedCattegories] = useState("");
    const [open, setOpen] = useState(false);

    return (
        <nav className='bg-gradient-to-r from-orange-600 to-orange-400 p-4'>
            <div className="flex justify-between items-center">

                <div className="flex items-center gap-3">
                    <img src="icons8-buying-48.png" className="w-10 h-10" />
                    <h1 className="text-3xl font-black">Mstore</h1>
                </div>

                <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
                    ☰
                </button>

                <ul className="hidden md:flex text-lg gap-8">
                    <li className="cursor-pointer hover:text-amber-50 ">Home</li>
                    <li className="cursor-pointer  hover:text-amber-50">Products</li>
                    <li className="cursor-pointer  hover:text-amber-50">Contact</li>
                </ul>
            </div>





            <div className="flex flex-col md:flex-row gap-4 mt-4">


                <input
                    type="search"
                    placeholder="Search..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full md:w-60 p-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 shadow-sm" />
                <button onClick={() => onSearch(text, selectedCattegories)} type="button" className=" border border-amber-50 border-l-2 bg-warning hover:bg-warning-strong focus:ring-4 focus:ring-warning-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none rounded-lg">Search</button>

                <select onChange={(e) => {
                    const cat = e.target.value;
                    setSelectedCattegories(cat);
                    onSearch(text, cat);
                }} className="p-2 border border-amber-50 border-l-2 rounded-lg">
                    <option value={""} className='text-black'>Select Category </option>
                    {uniqueCategories.map((category, index) => (
                        <option key={index} value={category} className='text-black'>{category} </option>

                    ))}
                </select>

                <select
                    className="p-2 border border-amber-50 border-l-2 rounded-lg"
                    onChange={(e) => handleSort(e.target.value)}>
                    <option value="">Sort By</option>
                    <option value="low-high">Price: Low to High</option>
                    <option value="high-low">Price: High to Low</option>
                    <option value="rating">Rating</option>
                </select>

            </div>


            {open && (
                <ul className="mt-4 flex flex-col gap-4 md:hidden">
                    <li>Home</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            )}

        </nav>
    )
}

export default Navbar