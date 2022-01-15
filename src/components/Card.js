import React from 'react'
import {BiShoppingBag} from 'react-icons/bi'
import {BsSuitHeartFill} from 'react-icons/bs'

const Card = ({textColor}) => {
    return (
        <div>
            <div className="card-body bg-gray-200 w-44 py-16 rounded-lg flex justify-center items-center relative">
                <BiShoppingBag className='text-6xl text-gray-500' />
                <div className="fav bg-gray-800 text-white p-1.5 text-xl rounded-full absolute top-3 right-3">
                    <BsSuitHeartFill />
                </div>
            </div>
            <p className='my-2'>
                Sample Products with <br />long name
            </p>
            <p className={`font-semibold ${textColor}`}>54,000 Ks</p>
        </div>
    )
}

export default Card
