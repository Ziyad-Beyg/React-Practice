import React from "react";
import {useParams} from "react-router-dom"

let MyProducts={
    1122:{
        productId:"1122",
        productName:"Potato",
        productPrice:"60Rs",
        productImage:"https://static-01.daraz.pk/p/fda2550a672cbe3325cecf26ceb4e6e7.jpg_200x200q80.jpg_.webp"

    },
    1123:{
        productId:"1123",
        productName:"PEDIASURE",
        productPrice:"1500Rs",
        productImage:"https://static-01.daraz.pk/p/a6504c01b94c5b9ad2e7a8fb578b2100.jpg_200x200q80.jpg_.webp"

    },
    1124:{
        productId:"1124",
        productName:"DETTOL SOAP",
        productPrice:"70Rs",
        productImage:"https://static-01.daraz.pk/p/0f82339bf229203e57ba39ade0617bbb.jpg_200x200q80.jpg_.webp"

    },
    1125:{
        productId:"1125",
        productName:"BLACK MASK",
        productPrice:"20Rs",
        productImage:"https://static-01.daraz.pk/p/ad13bdf4811ebf5e236780f70c213999.jpg_200x200q80.jpg_.webp"

    }
}


function ProductsDetails(){
    let {productId} = useParams();
    let {productName, productPrice, productImage} = MyProducts[productId]

    return (
        <div>
            <h1> {productName}</h1>
            <p>{productPrice}.</p>
            <img src={productImage}/>
        </div>
    )
} 

export default ProductsDetails