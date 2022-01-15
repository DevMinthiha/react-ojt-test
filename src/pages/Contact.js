import React from 'react'

const Contact = () => {
    return (
        <section className='w-full flex justify-center bg-red-600 text-white'>
            <div className="w-custom flex py-10 flex-wrap gap-10 justify-between">
            <div className="mr-auto">
                    <h2 className='text-lg font-bold mb-5'>Customer Service</h2>
                    <p className='mb-5 text-sm font-bold text-gray-200'>Terms & Privacy Policy</p>
                    <p className='text-sm font-bold text-gray-200'>Return Policy</p>
                </div>
                <div className="mr-auto">
                    <h2 className='text-lg font-bold mb-5'>Language</h2>
                    <p className='mb-5 text-sm font-bold text-gray-200'>Myanmar(Unicode)</p>
                    <p className='text-sm font-bold text-gray-200'>English</p>
                </div>
                <div className="mr-auto">
                    <h2 className='text-lg font-bold mb-5'>Contact Us</h2>
                    <p className='mb-5 text-sm font-bold text-gray-200'>No 17B, MyayKha St, Mayangone, <br /> 6 Miles, Yangon, Myanmar
                    </p>
                    <p className='text-sm font-bold text-gray-200'>
                        +959 345 454 345
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Contact
