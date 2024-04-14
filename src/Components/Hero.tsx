import React from 'react'

const Hero = () => {
    return (
        <div className=' px-8 flex h-full items-center'>
            <div className="w-69">
                <h4 className='text-2xl font-bold'>I'm Mohamed Amine Bazaou</h4>
                <h2 className='text-5xl font-bold my-6'>Software Engineer</h2>
                <p className='my-6'>A highly motivated student studying Artificial Intelligence 
                    and Machine Learning. Actively seeking opportunities to apply 
                    my skills and knowledge to real-world projects and contribute 
                    to the advancement of the industry.</p>
                    <div>
                        <button 
                        className='px-4 py-2 uppercase font-bold bg-blue-700 text-white rounded-full mr-6'>download cv</button>
                        <button className='px-4 py-2 uppercase font-bold border-2  rounded-full'>hire me</button>
                    </div>
            </div>
            <div className="h-full flex justify-end ">
                <img className='h-full' src="public/amine.png" alt="amine.png" />
            </div>

        </div>
    )
}

export default Hero
