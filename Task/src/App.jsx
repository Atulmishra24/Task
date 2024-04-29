import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import ProductDetail from './ProductDetail/ProductDetail';
import ProductList from './ProductList/ProductList';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [datas, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.post("https://app1.crazzyhub.com/api/all-filter-product-list", {
        'category_id': "28",
        'brand_id': "226",
        'color_id': ""
      }, {
        headers: {
          'Authorization': 'Bearer7c2b8693d001c79d4b5ed6ebc387ad6b862989dfjhjjhj'
        }
      });

      setData(res.data.data.product_list);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Added an empty dependency array to run the effect only once


  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<ProductList datas={datas} />} />
        <Route path="/api/product-details-api/" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
