import React from 'react'
import PromoCard from '../components/PromoCard'

const Promotion = () => {
    return (
        <section className='w-full flex justify-center py-10'>
            <div className="w-custom">
                <div className="flex items-center justify-between mb-10">
                    <h1 className='title mb-0'>Promotions</h1>
                    <p className='text-gray-500'>View More</p>
                </div>
                <div className="flex justify-center items-center gap-10 flex-wrap">
                    <PromoCard textColor={'text-red-600'} />
                    <PromoCard textColor={'text-red-600'} />
                    <PromoCard textColor={'text-red-600'} />
                    <PromoCard textColor={'text-red-600'} />
                    <PromoCard textColor={'text-red-600'} />
                    <PromoCard textColor={'text-red-600'} />
                </div>
            </div>
        </section>
    )
}

export default Promotion
