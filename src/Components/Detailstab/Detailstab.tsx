import React, { useEffect, useState } from 'react';
import './deatail.css'
import { useSelector } from 'react-redux';
import { getSelectedCustomer } from '../../reduxStore/slices/customerSlice';

const Detailstab = () => {

  const { customerName, id, description } = useSelector(getSelectedCustomer)
  const [randomNumbers, setRandomNumbers] = useState<number[]>([0,0,0,0,0,0,0,0,0]);
  
  function getRandomNumber(min: number = 1, max: number = 200): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const generateRandomNumbers = () => {
    setRandomNumbers(randomNumbers.map(() => getRandomNumber()));
  };
  

  useEffect(() => {
    generateRandomNumbers();
    const intervalId = setInterval(generateRandomNumbers, 5000); 
    return ()=> clearInterval(intervalId);
  }, [id]);
  
  return (
    <div className='detail-container'>
      <div>
        <h2>{customerName}</h2>
        <p>{description}</p>
        <div className="images-container">
        {randomNumbers.map((randomNumber, index) => (
          <img
            key={index} 
            src={`https://picsum.photos/id/${randomNumber}/200`}
            alt={`random ${randomNumber}`}
          />
        ))}
        </div>
      </div>
  </div>
  );
};

export default Detailstab;
