import React from 'react'
import MainButton from './MainButton'
import {myContext} from '../App'
export default function PageOne() {
      // Function that handle multiple functions on click
    const {setFlipPage} = React.useContext(myContext)
    function handleClick(){
        setFlipPage(true);
    }
    return (
        <div className='relative white-color h-screen white-color truncate flex items-center flex-col justify-center gap-6'>
            <h1 className='text-navy font-bold text-[2rem]'>Quizzical</h1>
            <p className='text-navy  text-[1rem]'>Some description if needed</p>
            <MainButton onClick={handleClick}>Start quiz</MainButton>
        </div>
    )
}
