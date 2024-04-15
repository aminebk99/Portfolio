import React from 'react'

const AboutMe = () => {
    return (
        <div className='mx-80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
            <div className='flex justify-center items-center'>
                <img className='transform scale-x-[-1]' src="/amine.png" alt="amine.png" />
            </div>
            <div className='flex flex-col justify-center'>
                <h4 className='text-2xl font-bold mb-4'>About me</h4>
                <p>I am actively seeking opportunities to apply my acquired skills 
                    and knowledge to real-world projects. My educational background has 
                    equipped me with a solid foundation in AI and ML algorithms, data 
                    analysis, and programming languages such as Python. Additionally, 
                    I have gained practical experience through hands-on projects, 
                    both independently and collaboratively.</p>
            </div>
        </div>
    )
}
export default AboutMe