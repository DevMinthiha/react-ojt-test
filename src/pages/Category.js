import React from 'react'
import categoryOne from '../images/Category icons/Asset 42.png'
import categoryTwo from '../images/Category icons/Asset 43.png'
import categoryThree from '../images/Category icons/Asset 44.png'
import categoryFour from '../images/Category icons/Asset 45.png'
import categoryFive from '../images/Category icons/Asset 46.png'
import {MdMoreHoriz} from 'react-icons/md'

const Category = () => {
    return (
        <section className='w-full flex justify-center py-10'>
            <div className="w-custom">
                <h1 className='text-center title mb-10'>Categories</h1>
                <ul className='flex flex-wrap gap-10 justify-center items-center'>
                    <li className='flex flex-col items-center'>
                        <img src={categoryOne} className='w-24 h-auto mb-3' alt="" />
                        <p>Sample <br /> Category</p>
                    </li>
                    <li className='flex flex-col items-center'>
                        <img src={categoryTwo} className='w-24 h-auto mb-3' alt="" />
                        <p>Sample <br /> Category</p>
                    </li>
                    <li className='flex flex-col items-center'>
                        <img src={categoryThree} className='w-24 h-auto mb-3' alt="" />
                        <p>Sample <br /> Category</p>
                    </li>
                    <li className='flex flex-col items-center'>
                        <img src={categoryFour} className='w-24 h-auto mb-3' alt="" />
                        <p>Sample <br /> Category</p>
                    </li>
                    <li className='flex flex-col items-center'>
                        <img src={categoryFive} className='w-24 h-auto mb-3' alt="" />
                        <p>Sample <br /> Category</p>
                    </li>
                    <li className='flex flex-col items-center'>
                        <img src={categoryOne} className='w-24 h-auto mb-3' alt="" />
                        <p>Sample <br /> Category</p>
                    </li>
                    <li className='flex flex-col items-center'>
                        <img src={categoryTwo} className='w-24 h-auto mb-3' alt="" />
                        <p>Sample <br /> Category</p>
                    </li>
                    <li className='flex flex-col items-center'>
                        <div className='w-20 h-20 bg-gray-300 mb-4 text-5xl text-gray-500 flex items-center justify-center rounded-full'><MdMoreHoriz /></div>
                        <p>View All</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Category
