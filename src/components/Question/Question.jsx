import React, { useState } from 'react';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './Question.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

function Question({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  score,
  setScore,
}) {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const handleSelect = i => {
    if (selected === i && selected === correct) {
      return 'select';
    } else if (selected === i && selected !== correct) {
      return 'wrong';
    } else if (i === correct) {
      return 'select';
    }
  };

  const handleCheck = i => {
    setError(false);
    setSelected(i);
    if (i === correct) {
      setScore(score + 1);
    }
  };

  const navigate = useNavigate();

  const handleQuit = () => {};
  const handleNextQuestion = () => {
    if (currQues > 8) {
      navigate('/result');
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
    } else {
      setError('Please select an option first');
    }
  };

  return (
    <div className='question'>
      <h1>Question {currQues + 1}</h1>

      <div className='singleQuestion'>
        <h2>{questions[currQues].question}</h2>

        <div className='options'>
          {error && <ErrorMessage>Please select an option</ErrorMessage>}

          {options &&
            options.map(i => (
              <button
                onClick={() => {
                  handleCheck(i);
                }}
                className={`singleOption ${selected && handleSelect(i)}`}
                key={i}
                disabled={selected}
              >
                {i}
              </button>
            ))}
          <div className='controls'>
            <Button
              variant='contained'
              color='secondary'
              size='large'
              style={{ width: 185 }}
              href='/'
              onClick={handleQuit}
            >
              Quit
            </Button>
            <Button
              variant='contained'
              color='primary'
              size='large'
              style={{ width: 185 }}
              onClick={handleNextQuestion}
            >
              Next Question
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
