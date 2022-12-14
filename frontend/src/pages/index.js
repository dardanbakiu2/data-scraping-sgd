import React from 'react';
import { useState, useEffect } from 'react';
import axios from '../axiosinstance';
import Select from 'react-select' 
import './style.css';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState();
  const [products, setProducts] = useState([{name:'fetch to view', price: 0}]);
  const [lowestPrice, setLowestPrice] = useState(0);
  const [highestPrice, setHighestPrice] = useState(99999);

  function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }
  
  useEffect(() => {
    axios.get('/categories').then((response) => {
      const data = response.data;
      const categories = data.map(category => {
        return  { value: category.name, label: category.name }
      })

      setCategories(sortByKey(categories, 'label'));
    })
  }, [])

  const scrape = () => {
    console.log(lowestPrice);
    console.log(highestPrice);
    axios.post('/scrape', {
      product: product.value,
      lowestPrice: lowestPrice,
      highestPrice: highestPrice
    })
    .then(function (response) {
      setProducts(sortByKey(response.data, 'price'))
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
        <input onChange={(e) => setLowestPrice(e.target.value)} placeholder="Lowest Price"></input><br/>
        <input onChange={(e) => setHighestPrice(e.target.value)} placeholder="Highest Price"></input><br/>
        <Select options={categories} onChange={setProduct} value={product}/>
        <br/>
        <button onClick={scrape}>Scrape</button>
      </div>

      {/* <div style={{
        display: 'flex',
        justifyContent:'center',
        margin: '30px 0'
      }}>
        <button onClick={() => {
          
        }}>asc</button>
        <button>desc</button>
      </div> */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '25px 0'
      }}>
        {
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Price</th>
              </tr>
            </tbody>
        {products?.map((p,index)=> (
          <tbody key={index}>
            <tr>
              <td>{p.name}</td>
              <td>{p.price}</td>
            </tr>
          </tbody>
        ))}
        </table>
      }
      </div>
    </div>
  );
};
  
export default Home;