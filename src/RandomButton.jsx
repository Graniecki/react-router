import { useState, useEffect } from 'react';

export const RandomButton = () => {
  const [randomValue, setRandomValue] = useState(1000);

  useEffect(() => {
    console.log('RandomButton');
  });

  return (
    <div>
      <h2>Random value: {randomValue}</h2>
      <button onClick={() => setRandomValue(Math.round(Math.random() * 1000))}>Change value</button>
    </div>
  );
};
