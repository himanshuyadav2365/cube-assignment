import {useEffect, useState } from 'react'

const PhotoGrid = (prop:{id:number}) => {
    
    const [randomNumbers, setRandomNumbers] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    function getRandomNumber(min: number = 1, max: number = 200): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const generateRandomNumbers = () => {
        setRandomNumbers(randomNumbers.map(() => getRandomNumber()));
    };

    useEffect(() => {
        generateRandomNumbers();
        const intervalId = setInterval(generateRandomNumbers, 10000);
        return () => clearInterval(intervalId);
    }, [prop.id]);

  return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-4">
          {randomNumbers.map((randomNumber, index) => (
              <img
                  key={index}
                  src={`https://picsum.photos/id/${randomNumber}/200`}
                  alt={`random ${randomNumber}`}
                  className='rounded-lg shadow-md'
              />
          ))}
      </div>
  )
}

export default PhotoGrid