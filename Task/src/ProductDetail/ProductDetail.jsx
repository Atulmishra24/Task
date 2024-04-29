import React, { useState } from 'react'
import "./ProductDetail.css"
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import {useLocation } from 'react-router-dom';
import ScrollItem from '../ScrollItem/ScrollItem';
const ProductDetail = () => {

    let location = useLocation();
    let params = new URLSearchParams(location.search);
    let product_id = params.get('product_id');
    let variant_id = params.get('variant_id');
    const [productDetail, setProductDetail] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const response = await axios.get(`https://app1.crazzyhub.com/api/product-details-api/`, {
                    params: {
                        product_id: product_id,
                        variant_id: variant_id
                    },
                    headers: {
                        Authorization: '7c2b8693d001c79d4b5ed6ebc387ad6b862989dfjhjjhj'
                    }
                });
                console.log(response);
                setProductDetail(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log("Product Detail updated:", productDetail);
    }, [productDetail]);
    const ChangeVariant=async(details)=>{
        try {
           const product_id1=details?.related_products?.product
          const variant_id1=details.data?.id;
          const color_variant_id=details?.data?.color_variant_value;
          const storage_variant_id=details?.data?.storage_variant_value;
          const other_variant_id=details?.data?.other_variant_value;
     
            const response = await axios.get(`https://app1.crazzyhub.com/api/product-variant-filter-api/`, {
                params: {
                    product_id: product_id1,
                    variant_id: variant_id1,
                    color_variant_id:color_variant_id,
                    storage_variant_id:storage_variant_id,
                    other_variant_id:other_variant_id,
                    search:"other",
                },
                headers: {
                    Authorization: '7c2b8693d001c79d4b5ed6ebc387ad6b862989dfjhjjhj'
                }
            });
            console.log(response);
            setProductDetail(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
  return (
    <>
    <div className="top">
        <div className="top-1">
            <img src="https://crazzyhub.s3.amazonaws.com/media/product_variant/One-Plus-10T-Mobile-Phone-GREEN_Ydkqaow.jpg" alt="" />
            <div className="image-change">
                <div className="image-change-1">
                    <img src="https://crazzyhub.s3.amazonaws.com/media/product_variant/One-Plus-10T-Mobile-Phone-GREEN_Ydkqaow.jpg" alt="" />
                </div>
                <div className="image-change-1"></div>
                <div className="image-change-1"></div>
                <div className="image-change-1"></div>
                <div className="image-change-1"></div>
            </div>
        </div>
        <div className="top-2">
             <div className="top-2-1">
              
                {productDetail?.data?.product_variant_name}
            </div>
            <div className="top-2-2">
            <i className="fa-regular fa-star"></i> &nbsp;
            <i className="fa-regular fa-star"></i>&nbsp;
            <i className="fa-regular fa-star"></i>&nbsp;
            <i className="fa-regular fa-star"></i>&nbsp;
            <i className="fa-regular fa-star"></i>
            </div>
            <div className="top-2-3">
       {productDetail?.data?.stock_sataus}
            </div>
            <div className="top-2-4">
                <div className="top-2-4-actual"> {productDetail?.data?.price}</div>
                <div className="top-2-4-price"> M.R.P. {productDetail?.data?.price}</div>
                <div className="top-2-4-discount"> {productDetail?.data?.discount_percent}%</div>
                
            </div>
            <div className="top-2-5">
                Color
            </div> 
            <div className="top-2-6">

            {productDetail?.data?.variant_color_values.map((element, index) => (
        
    //  put this in div link  onClick={() => ChangeVariant(ProductDetail?.)}
        <div className="top-2-6-1" key={index} >
            <img src={element.variant_image} alt="image" width={40} height={60} />
            <p>{element.value}</p>
        </div>
  
       
      
    ))}
       
            </div>
            <div className="top-2-7">
                RAM
            </div>
          
        <div className="top-2-8" >
        {productDetail?.data?.storage_variant_name}

  
        </div>


            <div className="top-2-9">
                Storage
            </div>

            <div className='storage'>
            {productDetail?.data?.variant_storage_values.map((element, index) => (
        
        <div  className="top-2-10" key={index}>
            <div className="top-2-10-1">
            {element.value}
                </div>
 
        </div>
    ))}
            </div>
           
            
            <div className="top-2-11">
                <div className="top-2-11-1">
                    Delivery Options:
                </div>
                <div className="top-2-11-2">
                    Enter Pincode
                </div>
            </div>
            <div className="top-2-12">
                <div className="top-2-12-1">
                <i className="fa-solid fa-repeat"></i> &nbsp; Replacement
                </div>
                <div className="top-2-12-1">
                <i className="fa-solid fa-award"></i> &nbsp; Warranty
                </div>
                <div className="top-2-12-1">
                <i className="fa-regular fa-money-bill-1"></i> &nbsp; GST Invoice
                </div>
            </div>
        </div>
        <div className="top-3">
            <div className="top-3-scroll">
                <h3><u>Frequently Bought Together</u> </h3>
                {productDetail?.related_products?.map((ele, idx) => (
    <ScrollItem data={ele} key={idx} />
))}

            </div>
            <div className="top-3-buy-now">
                Buy Now
            </div>
            <div className="top-3-add-to-cart">
                Add To Cart
            </div>
            <div className="top-3-options">
                <div className="top-3-options-share">
                <i className="fa-solid fa-share-nodes"></i>&nbsp; Share
                </div>
                <div className="top-3-options-compare">
                <i className="fa-solid fa-code-compare"></i>&nbsp; Compare
                </div>
                <div className="top-3-options-wishlist">
                <i className="fa-regular fa-heart"></i> &nbsp; Wishlist
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default ProductDetail