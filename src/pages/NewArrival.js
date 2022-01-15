import React from 'react'
import Card from '../components/Card'
import apple from '../images/brand/appleLogo.png'
import samsaung from '../images/brand/samsaung.png'
import google from '../images/brand/google.png'
import oneplus from '../images/brand/onePlus.png'
import mi from '../images/brand/mi.png'
import realme from '../images/brand/realme.png'
import hwawei from '../images/brand/huawei.png'
import Ad from '../components/Ad'

const NewArrival = () => {
    return (
        <section className='w-full flex flex-col items-center justify-center py-10'>
            <div className="w-custom">
                <div className="flex items-center justify-between mb-10">
                    <h1 className='title mb-0'>new arrivals</h1>
                    <p className='text-gray-500'>View More</p>
                </div>
                <div className="flex justify-center items-center gap-10 flex-wrap">
                    <Card textColor={'text-red-600'} />
                    <Card textColor={'text-red-600'} />
                    <Card textColor={'text-red-600'} />
                    <Card textColor={'text-red-600'} />
                    <Card textColor={'text-red-600'} />
                    <Card textColor={'text-red-600'} />
                </div>
            </div>
            <div className="w-custom mt-10">
                <Ad />
            </div>
            <div className="w-custom mt-10">
                <h1 className='title mb-0'>view by brands</h1>
                <div className="flex items-center mt-10 flex-wrap gap-10 justify-center">
                    <img src={apple} className='w-28 h-auto'  alt="" />
                    <img src={samsaung} className='w-28 h-auto'  alt="" />
                    <img src={google} className='w-28 h-auto'  alt="" />
                    <img src={oneplus} className='w-28 h-auto'  alt="" />
                    <img src={mi} className='w-16 h-auto'  alt="" />
                    <img src={realme} className='w-28 h-auto'  alt="" />
                    <img src={hwawei} className='w-28 h-auto'  alt="" />
                    <p className='text-red-600'>View All</p>
                </div>
            </div>
        </section>
    )
}

export default NewArrival
