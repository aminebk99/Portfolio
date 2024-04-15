import React from 'react'

const Hero = () => {
    return (
        <div className='2xl:mx-80 px-8 flex h-full items-center justify-between'>
            <div className="w-1/2">
                <h4 className='text-2xl font-bold'>I'm Mohamed Amine Bazaou</h4>
                <h2 className='text-5xl font-bold my-4 text-blue-700 [text-shadow:_0_1px_4px_rgb(0_0_0_/_40%)]'>Software Engineer</h2>
                <p className='my-4 text-gray-600'>A highly motivated student studying Artificial Intelligence 
                    and Machine Learning. Actively seeking opportunities to apply 
                    my skills and knowledge to real-world projects and contribute 
                    to the advancement of the industry.</p>
                    <div className='mb-6'>
                        <button 
                        className='shadow-md px-4 py-2 uppercase font-bold bg-blue-700 text-white rounded-full mr-6'>download cv</button>
                        <button className='shadow-md px-4 py-2 uppercase font-bold border-2  rounded-full'>hire me</button>
                    </div>
            </div>
            <div className="w-1/2 h-full flex justify-end ">
                <img className='h-full' src="public/amine.png" alt="amine.png" />
            </div>

        </div>
    )
}

export default Hero
