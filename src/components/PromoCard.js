import React from 'react'
import {BiShoppingBag} from 'react-icons/bi'
import {BsSuitHeartFill} from 'react-icons/bs'

const PromoCard = ({textColor}) => {
    return (
        <div>
            <div className="card-body bg-gray-200 w-44 py-16 rounded-lg flex justify-center items-center relative">
                <BiShoppingBag className='text-6xl text-gray-500' />
                <div className="fav bg-gray-800 text-white p-1.5 text-xl rounded-full absolute top-3 right-3">
                    <BsSuitHeartFill />
                </div>
                <div className="fav bg-red-600 text-white px-2 rounded-lg absolute top-3 left-3 font-semibold">
                    <p>00 % off</p>
                </div>
            </div>
            <p className='my-2'>
                Sample Products with <br />long name
            </p>
            <p className={`font-semibold ${textColor}`}>54,000 Ks</p>
            <p className='font-semibold text-sm text-gray-500'><strike>60,000 Ks</strike></p>
        </div>
    )
}

export default PromoCard
