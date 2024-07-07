import React from "react";
import Category from "./Category";
import MainButton from "./MainButton";
import { decode } from "html-entities";

export default function PageTwo() {
  // state to save questions without changing
  const [quizForm, setQuizForm] = React.useState([]);
  // Sate to count the correct answers
  const [counter, setCounter] = React.useState(0);
  // state to check answers
  const [checkAnswer, setCheckAnswer] = React.useState(false);
  // state that save my data from fetch
  const [data, setData] = React.useState([]);
  // state to manage the loader
  const [loader, setLoader] = React.useState(true);

  // Function to handle submit
  function handleSubmit() {
    if (checkAnswer) {
      setCheckAnswer(false);
      setCounter(0);
      setQuizForm([]);
      getData();
    } else {
      let correctCounter = 0;
      quizForm.map((item) => {
        if (item.correctAnswer === item.userAnswer) {
          correctCounter++;
        }
      });
      setCounter(correctCounter);
      setCheckAnswer(true);
    }
  }

  // Function to fetch data from API
  function getData() {
    setLoader(true);
    fetch("https://opentdb.com/api.php?amount=5&difficulty=easy")
      .then((res) => res.json())
      .then((data) => {
        setData(data.results || []);
        setLoader(false);
      });
  }

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    if (data.length > 0) {
      setQuizForm(
        data.map((data) => {
          const question = decode(data.question);
          const correctAnswer = decode(data.correct_answer);
          const allAnswers = data.incorrect_answers.map((answer) =>
            decode(answer),
          );
          allAnswers.splice(
            Math.floor(Math.random() * data.incorrect_answers.length),
            0,
            correctAnswer,
          );
          return {
            question: question,
            options: allAnswers,
            correctAnswer: correctAnswer,
            userAnswer: "",
            check: false,
          };
        }),
      );
    }
  }, [data]);

  return (
    <div className="relative min-h-screen ">
      {loader ? (
        <div className="flex items-center justify-center min-h-screen">
          <span className="loader"></span>
        </div>
      ) : (
        <div className=" ">
          <div className="bubble w-[100px] h-[100px] bg-yellow-color rounded-bl-full absolute right-0 "></div>
          <div className=" flex flex-col items-center">
            {quizForm.map((data, index) => {
              return (
                <Category
                  key={index}
                  question={data.question}
                  options={data.options}
                  setQuizForm={setQuizForm}
                  correctAnswer={data.correctAnswer}
                  checkAnswer={checkAnswer}
                />
              );
            })}
            <div className="flex justify-center items-center gap-5 mt-8 mb-8">
              {checkAnswer && (
                <p className="text-[1.2rem] font-bold text-navy">
                  You scored {counter} / {quizForm.length} correct answers
                </p>
              )}
              <MainButton onClick={handleSubmit}>
                {checkAnswer ? "Play Again" : "Check Answers"}
              </MainButton>
            </div>
          </div>
          <div className="bubble w-[100px] h-[100px] bg-blue-color  absolute rounded-tr-full bottom-0  "></div>
        </div>
      )}
    </div>
  );
}
