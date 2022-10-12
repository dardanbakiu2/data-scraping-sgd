import React from 'react';
import { useState, useEffect } from 'react';
import axios from '../axiosinstance';
import Select from 'react-select' 
import './style.css';
  
const About = () => {
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState();
  const [products, setProducts] = useState([{name:'Scrape to view', price: 0}]);

  function sortByKey(array, key) {
    return array.sort(function(a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  function getProducts(product) {
    setProduct(product);

    axios.get('/products', {params : { product: product.value } }).then((response) => {
      console.log(response.data)
      setProducts(sortByKey(response.data, 'price'));
    })
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
  return (
    <div
      style={{
        display: 'flex',
        // justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <h1>Scraped Products</h1>

      <div>
        <Select options={categories} onChange={getProducts} value={product}/>
      </div>

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
  
export default About;