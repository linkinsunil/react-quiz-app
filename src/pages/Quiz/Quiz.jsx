import React, { useEffect, useState } from 'react';
import './Quiz.css';
import CircularProgress from '@mui/material/CircularProgress';
import Question from './../../components/Question/Question';

function Quiz({ name, questions, setQuestions, score, setScore }) {
  const [currQues, setCurrQues] = useState(0);
  const [options, setOptions] = useState();

  const handleShuffle = arr => arr.sort(() => Math.random() - 0.5);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );

    console.log(questions);
  }, [questions, currQues]);

  console.log('options🟢', options);

  return (
    <div className='quiz'>
      <span className='subtitle'>Welcome, {name}</span>
      {questions ? (
        <>
          <div className='quizInfo'>
            <span>{questions[currQues].category}</span>
            <span>Score : {score}</span>
          </div>

          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues].correct_answer}
            score={score}
            setScore={setScore}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color='inherit'
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
}

export default Quiz;
