import React from 'react';
import { useState, useEffect } from 'react';
import axios from '../axiosinstance';
import Select from 'react-select' 
import './style.css';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState();
  const [products, setProducts] = useState([{name:'fetch to view', price: 0}]);

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
    axios.post('/scrape', {
      product: product.value
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
           <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        {products?.map(p=> (
            <tr>
              <td>{p.name}</td>
              <td>{p.price}</td>
            </tr>
        ))}
        </table>
      }
      </div>
    </div>
  );
};
  
export default Home;