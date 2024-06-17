import React from 'react'

export default function Question(props) {
    return (
        <div className='text-navy  font-bold text-[1.5rem] mb-[20px] '>
            {props.children}
        </div>
    )
}
