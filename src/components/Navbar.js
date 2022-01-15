import React, { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import {BiShoppingBag, BiBell} from 'react-icons/bi'
import {RiShoppingCartLine} from 'react-icons/ri'
import {BsPerson} from 'react-icons/bs'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import myanmar from '../images/myanmarFlag.png'

const Navbar = () => {
    const [input, setInput] = useState("Search product");
    const onInputChange = (e) => setInput(e.target.value);
    return (
        <nav className='w-full flex justify-center py-10'>
            <div className="w-custom flex justify-between flex-col md:flex-row gap-5">
                <div className="flex items-center justify-between bg-custom text-white rounded-lg px-3">
                    <input type="text" className='bg-transparent py-2 text-sm font-bold outline-none w-44 ' value={input} onChange={onInputChange} />
                    <FaSearch />
                </div>
                <div className="text-3xl font-bold text-white">LOGO</div>
                <div className="">
                    <ul className='flex items-center gap-5'>
                        <li className='flex items-center font-semibold text-white text-lg gap-2'>
                            <img src={myanmar} alt="" className='w-8 h-auto' />
                            Ks<MdOutlineKeyboardArrowDown className='text-2xl' />
                        </li>
                        <li className='bg-custom text-2xl text-white p-2 rounded-lg'><BiShoppingBag /></li>
                        <li className='bg-custom text-2xl text-white p-2 rounded-lg'><RiShoppingCartLine /></li>
                        <li className='bg-custom text-2xl text-white p-2 rounded-lg'><BiBell /></li>
                        <li className='bg-custom text-2xl text-white p-2 rounded-lg'><BsPerson /></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
