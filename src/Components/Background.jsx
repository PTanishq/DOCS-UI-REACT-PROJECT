import React from 'react'

function background() {
  return (
    <>
    <div className='w-full h-screen fixed z-[2]'>
        <div className='absolute top-[4%] w-full text-xl py-4 flex justify-center text-zinc-600 font-semibold'>Documents.</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[12vw] tracking-tight leading-none  font-semibold text-zinc-900'>Docs.</h1>
    </div>
    </>
  )
}

export default background