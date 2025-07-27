import React from 'react'
import LeafletMap from './Map'
const Location = () => {
  return (
    <section className='w-full h-full flex-col px-10 xl:px-20 py-10 lg:py-20 items-center justify-center flex gap-10 lg:gap-20'>
      <h1 className='text-3xl sm:text-5xl font-bold font-overpass'>Loca<span className='text-yellow-400'>tion</span></h1>
      <div className='w-full h-full flex-col sm:flex-row items-center justify-between flex gap-10'>
      <div className='w-full h-full flex items-center justify-center'><LeafletMap /></div>
      <div className='w-full h-full items-center sm:items-end text-end text-2xl lg:text-5xl font-bold font-sans gap-5 lg:gap-10 flex flex-col'>
        <h1>Opp. <span className='text-yellow-400'>Raitu bazaar,</span></h1>
        <h1> Chenchupet,</h1>
        <h1 className='text-yellow-400'>TENALI,</h1>
        <h1>522201</h1>
        <a href="9966661177">99-6666-1177</a>
      </div>
      </div>
    </section>
  )
}

export default Location