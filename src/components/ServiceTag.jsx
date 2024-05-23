import React from 'react'

function ServiceTag({logo, title, text}) {
  return (
    <div className='w-full relative border-2 rounded-xl p-7 flex flex-col gap-5'>
        <img src={logo} alt={title} className='w-20' />
        <h3 className='text-3xl font-medium'>{title}</h3>
        <p className='text-xl text-neutral-500'>{text}</p>
    </div>
  )
}

export default ServiceTag