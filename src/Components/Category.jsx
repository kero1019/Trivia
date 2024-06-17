import React from 'react'
import Question from './Question'
import Option from './Option'
export default function Category({question, options, setQuizForm, correctAnswer , checkAnswer}) {
    const [change, setChange] = React.useState(null);
        // Function to handle click
        function handleClick(index, option){
            if(!checkAnswer){
                setChange(index);
                setQuizForm((prevQuizForm) => {
                    return prevQuizForm.map((item) => {
                        return item.question === question ? {...item, userAnswer: option} : item
                    })
                })
            }
        }

    return (
        <div className=' w-[80%]'>
            <Question> {question} </Question>
            <div className="options flex gap-4">
                {
                options.map((option, index)=>{
                    return <Option key={index} onClick={()=>handleClick(index, option)} isActive={change === index} isCorrect={option === correctAnswer} checkAnswer={checkAnswer} >{option}</Option>
                })
                }
            </div>
            <hr className='mt-4' />
        </div>
    )
}
