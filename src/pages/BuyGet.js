import React from 'react'
import Card from '../components/Card'

const BuyGet = () => {
    return (
        <section className='w-full flex justify-center bg-yellow-400 py-10'>
            <div className="w-custom">
                <div className="flex items-center justify-between mb-10">
                    <h1 className='title mb-0'>Buy 1 Get 1</h1>
                    <p className='text-gray-500'>View More</p>
                </div>
                <div className="flex justify-center items-center gap-10 flex-wrap">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default BuyGet
