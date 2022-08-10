import './App.css';
import Tours from './Tours';
import React, {useState, useEffect} from 'react';

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async() => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      setLoading(false);
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, []);

  const removeItem = (id) =>{
    const newTours = tours.filter((tour) => id !== tour.id)
    setTours(newTours)
  }

  if (tours.length === 0){
    return(
    <main>
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={()=> fetchData()}>refresh</button>
      </div>
    </main>
    )
  }

  return (
    <main>
      <Tours tours={tours} removeItem={removeItem} />
    </main>
  );
}

export default App;
