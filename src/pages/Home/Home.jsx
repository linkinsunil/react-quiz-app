import './Home.css';
import quiz from './../../assets/quiz.svg';
import { MenuItem, TextField, Button } from '@mui/material';
import Categories from './../../Data/Categories';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

function Home({ name, setName, fetchQuestions }) {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate('/quiz');
    }
  };

  return (
    <div className='content'>
      <div className='settings'>
        <span style={{ fontSize: 30 }}>Quiz Settings</span>
        <div className='settings__select'>
          {error && <ErrorMessage>Please fill all the fields</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label='Enter Your Name'
            variant='outlined'
            onChange={e => setName(e.target.value)}
          />
          <TextField
            select
            label='Select Category'
            variant='outlined'
            style={{ marginBottom: 30 }}
            onChange={e => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map(cat => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label='Select Difficulty'
            variant='outlined'
            style={{ marginBottom: 30 }}
            onChange={e => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key='easy' value='easy'>
              Easy
            </MenuItem>
            <MenuItem key='medium' value='medium'>
              Medium
            </MenuItem>
            <MenuItem key='hard' value='hard'>
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant='contained'
            size='large'
            color='primary'
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src={quiz} className='banner' alt='quiz' />
    </div>
  );
}

export default Home;
