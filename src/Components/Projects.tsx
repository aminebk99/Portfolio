import React from 'react'
import Card from './Card'
import data from '../assets/Data.json'

const Projects = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className="text-5xl font-bold my-14 [text-shadow:_0_1px_4px_rgb(0_0_0_/_40%)]">
        Projects
      </h2>
      <div className='grid xl:grid-cols-3 my-10 gap-10 md:grid-cols-2 sm:grid-cols-1'>
        {
          data.map((card) => (
            <Card key={card.id} {...card} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects
