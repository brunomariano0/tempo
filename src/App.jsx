import React, { useState } from 'react';
import fetchData from './services/api';
import initialData from './halpers/initialData';
import Card from './components/Card';
import fecthData from './services/api';


function App() {
  const [city, setcity] = useState('');
  const [data, setData] = useState(initialData);


  const handleSubmit = (event) =>{
    event.preventDefault();
    fecthData(city).then((response) =>{
      setData(response);
    });
  };
  

  return (
    <div className="  flex flex-col w-full h-screen items-center justify-center">
      <form onSubmit={ handleSubmit }>
        <input
        type="text"
        placeholder="Cidade"
        className="p3 rounded-lg outline-none"
        value={city}
        onChange={({ target: { value } }) => setcity(value)}
        />
        <button
            type="submit"
            className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold"
          >Pesquisar
        </button>
      </form>   

      <Card data={data} />
    </div>
  );
}

export default App;
