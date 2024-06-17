import React from 'react'

export default function Option({children, isActive, onClick, isCorrect, checkAnswer}) {
    let backgroundColor = "";
    if(checkAnswer){
        if (isCorrect) {
            backgroundColor = "#94D7A2"; // Green for correct
        } else if (!isCorrect && isActive) {
            backgroundColor = "#F8BCBC"; // Red for incorrect
    }
    }
    else {
        if(isActive)
        backgroundColor = "#D6DBF5"; // Blue for selected
    }
    return (
        <button className={"border-solid border-2 border-button-background text-navy rounded-2xl px-5 py-1 font-semibold"}
        onClick={onClick}
            style={{backgroundColor}}
        >
            {children}
        </button>
    )
}
