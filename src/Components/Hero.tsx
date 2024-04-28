import React from 'react';
import amineImage from '../../public/amine.png'; 

const Hero = () => {
    return (
        <div className='w-auto xl:mx-14 2xl:mx-80 lg:mx-8 md:mx-8 sm:mx-14 flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between'>
            <div className="md:w-1/2  md:flex md:flex-col md:justify-center">
                <h4 className='lg:text-2xl font-bold md:text-start text-center'>I'm Mohamed Amine Bazaou</h4>
                <h2 className='text-3xl lg:text-5xl font-bold md:text-start text-center my-4 text-blue-700 text-shadow-md'>Software Engineer</h2>
                <p className='mx-8 md:mx-0 my-4 text-gray-600 md:text-start text-center'>A highly motivated student studying Artificial Intelligence 
                    and Machine Learning. Actively seeking opportunities to apply 
                    my skills and knowledge to real-world projects and contribute 
                    to the advancement of the industry.</p>
                <div className='mb-6 flex justify-center md:justify-start'>
                    <button 
                    className='shadow-md px-4 py-2 uppercase font-semibold bg-blue-700 text-white rounded-full mr-6'>download cv</button>
                    <button className='shadow-md px-4 py-2 uppercase font-semibold border-2 rounded-full'>hire me</button>
                </div>
            </div>
            <div className="hidden md:w-1/2 md:flex md:justify-end">
                <img className='h-auto max-h-80' src={amineImage} alt="amine.png" />
            </div>
        </div>
    );
}

export default Hero;
