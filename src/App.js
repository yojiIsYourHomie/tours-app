import React, { useEffect, useState } from 'react';
import './App.css';
import Loading from './Loading';
import Tours from './Tours';


const url ='https://course-api.com/react-tours-project'

function App() {
const [loading, setLoading] = useState(true)
const [tours, setTours] = useState([])

const fetchTours = async () => {
  setLoading(true)
  try {
  const response = await fetch(url)
  const tours = await response.json()
  setTours(tours)
  setLoading(false)
  } catch (error) {
    console.log(error)
  }
}

  const handleDelete = (id) => {
    const updatedList = tours.filter(tour => tour.id !== id)
    setTours(updatedList)
  }

useEffect(() => {
  fetchTours()
}, [])

if(loading) {
  return <main>
    <Loading />
  </main>
}

if(tours.length < 1) {
  return <div className='title'>
    <h1>No tours left</h1>
    <button onClick={() => fetchTours()} className='btn refresh-btn'>Refresh</button>
  </div>
}

  return (
    <main className='container'>
      <Tours tours={tours} handleDelete={handleDelete}/>
    </main>
  );
}

export default App;
