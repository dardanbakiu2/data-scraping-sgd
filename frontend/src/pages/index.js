import React from 'react';
import { useState, useEffect } from 'react';
import axios from '../axiosinstance';

const Home = () => {
  const [product, setProduct] = useState();

  useEffect(() => {
    axios.get('/test').then((data) => {
      console.log('here are data : ', data)
    })
  }, [])

  const scrape = () => {
    axios.post('/scrape', {
      product: product
    })
    .then(function (response) {
      console.log(response);
    })
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline',
          height: '15vh',
          color: '#e15725',
        }}
      >
        <h1>Scraping </h1>
        <img style={{
            width:'100px',
            height: '20px'
          }} src="https://gjirafa50.com/images/logos/logo.svg" />
      </div>
      
      <div 
        style={{
          display:'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <input type="text" onChange={(e) => setProduct(e.target.value)} />
        <br/>
        <button onClick={scrape}>Scrape</button>
      </div>
    </div>
  );
};
  
export default Home;