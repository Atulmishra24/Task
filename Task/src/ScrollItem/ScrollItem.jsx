import React, { useEffect } from 'react'

const ScrollItem = ({data}) => {
    useEffect(()=>{
        console.log(data)
    },[])
  return (
    <div className="top-3-scroll-item">
    {console.log(data)}
    <div className="top-3-scroll-item-img">
        <img src={data?.variant_image} alt="" />
    </div>
    <div className="top-3-scroll-item-title">
        <div className="top-3-scroll-item-title-bold">
  {data?.product_variant_name}
        </div>
        <div className="top-3-scroll-item-title-brand">
           {data?.brand_name}
        </div>
    </div>
    <div className="top-3-scroll-item-price">
{data?.price}
    </div>
</div>
  )
}

export default ScrollItem