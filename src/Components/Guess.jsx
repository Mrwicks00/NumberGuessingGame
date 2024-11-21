import React from 'react'
import { useState } from 'react'

const Guess = () => {
    const generateRandomNumber = ()=>{
        return Math.floor(Math.random() * 100) + 1;
    }
    
    const [secretNumber, setSecretNumber] = useState(generateRandomNumber());
    const [guess, setGuess] = useState('');
    const [feedback, setFeedback] = useState('');
    const [attempts, setAttempts] = useState(5);


    const handleGuess = () => {
        const userGuess = parseInt(guess, 10);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            setFeedback('Invalid input! Please enter a number between 1 and 100.');
            return;
        }

        if (attempts <= 1) {
        setFeedback(`Game over! The number was ${secretNumber}.`);
        return;
        }
        if (userGuess === secretNumber) {
        setFeedback('🎉 Correct! You win!');

        } else if (userGuess < secretNumber) {
        setFeedback('Too low! Try again.');
        setAttempts(attempts - 1);

        } else if (userGuess > secretNumber) {
        setFeedback('Too high! Try again.');
        setAttempts(attempts - 1);
        }
        setGuess('');
  };

  const restartGame = () => {
    setSecretNumber(generateRandomNumber());
    setGuess('');
    setFeedback('');
    setAttempts(5);
  };

    



  return (
    <div className='bigbox'>
        <div className='Guessbox'>
        <h1 className='text-4xl mb-10 font-bold'>Number Guesser Game</h1>
      <p>Guess a number between 1 and 100.</p>
      <input
        className='rounded-xl'
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess} className='Guessbutton'>Guess</button>
      <button onClick={restartGame} className='restartbutton '>Restart</button>
      <p className='feedback'>{feedback}</p>
      <p className='mb-5'>Attempts left: {attempts}</p>
        </div>

    </div>
  )
}

export default Guess