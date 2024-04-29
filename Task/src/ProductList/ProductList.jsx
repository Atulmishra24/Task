import React from 'react'
import ProductItem from '../ProductItem/ProductItem';
// import Link from "react-router-dom";
import "../ProductList/ProductList.css"
import { Link } from 'react-router-dom';
const ProductList = ({datas}) => {
  return (
    <div className='product-list'>
    {
        datas.map((data, indx)=>{


            return  <Link
            key={indx}
            to={{
              pathname: '/api/product-details-api/',
              search: `?product_id=${data.id}&variant_id=${data.variant_id}`,
            }}
            className="link-style"
          >
            <ProductItem data={data} indx={indx} />
          </Link>        
           
        })
    }
    </div>
  )
}

export default ProductList