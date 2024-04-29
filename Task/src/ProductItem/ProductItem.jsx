import React from 'react'
import "../ProductItem/ProductItem.css";
import { CiHeart } from "react-icons/ci";
import { MdCurrencyRupee } from "react-icons/md";
const ProductItem = ({data}) => {
  return (
<div className='product-item'>
  <div className='icon'>
  <CiHeart size={25} />
  </div>
  <div>
  <img src={data.image} alt="Product item image" height={160} width={160}  />
  </div>
  <div>
  <div className='title'>
<p >{data.title}</p>
</div>
  
<div  className='status'>
<p >{data.stock_sataus}</p>
</div>
<div >
<p><MdCurrencyRupee />{data.price}</p>
</div>
<div className='discount-main'>
<span className='line-through'>{data.price}</span><span className='discount'>{data.discount_percent}%off</span>

</div>
  </div>






</div>

  )
}

export default ProductItem