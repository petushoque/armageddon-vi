import React from 'react';
import { useState, useEffect } from 'react';
import { today, tomorrowDate } from '../utils/date';
import * as api from '../utils/api';
import './App.css';

function App() {

  const [spaceObjects, setSpaceObjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('')

  useEffect(() => {
    api.takeData(today, tomorrowDate)
    .then((res) => {
      console.log(res)
      setIsLoading(false)
      setSpaceObjects(res.near_earth_objects[`${today}`])
    })
    .catch((err) => {
      console.log(err)
      setError(err)
    })
  }, [])

  console.log(spaceObjects)

  return (
    <div className='App'>
      {isLoading ? 
      <>
      <div className='App__loader'></div>
      <p className='App__error'>{error}</p>
      </> : 
      <p>no</p>}
    </div>
  );
}

export default App;
