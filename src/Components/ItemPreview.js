import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemPreview = () => {
    const params = useParams()
    
    const [product , setProduct] = useState({});

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    }, [])

    if(!product.title) {
        return <div className="h-screen w-full grid place-items-center bg-gray-900">
            <div className="h-3 w-3">
                <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
            </div>
        </div>
    }

    return (
        <div>
            <div className="flex flex-col w-full h-screen items-center">
                
                <div>
                    <img src={product.image} width="200px"></img>
                </div>
                <div className="font-semibold text-lg pt-8">{product.title}</div>
                <div className="max-w-xl pt-2">{product.description}</div>
                <div className="my-8">
                    <div className="py-4 rounded-sm text-white  px-8 bg-gray-900">Buy at {product.price}$ </div>
                </div>
            </div>
        </div>
    )
}

export default ItemPreview
