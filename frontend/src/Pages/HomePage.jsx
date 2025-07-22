import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'
import api_url from '../utils'

const HomePage = () => {

    const [products, setProducts] = useState([]);

    const FetchProduct = async () => {
        try {
            const url = `${api_url}api/product/fetch`;
            const response = await fetch(url);
            const result = await response.json();
            const { success, message, error, productList } = result;
            if (success) {
                console.log(message, productList);
                setProducts(productList);
            } else {
                console.log(message, error);
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        FetchProduct();
    }, [])

    return (
        <>
            <Navbar />
            <Hero />
            <div className='my-20'>
                <h1 className='text-center font-bold text-4xl'>LATEST COLLECTIONS ---------</h1>
                <p className='text-center text-xl text-gray-600'>Step into a world of style with our newest collections, carefully curated to bring you the best in fashion, home decor, and more.</p>
                <div className="grid grid-cols-2 my-10 md:grid-cols-4 gap-4 px-4 md:px-10">
                    {products?.map(val => (
                        <div key={val._id} className="aspect-[3/4] overflow-hidden rounded-lg">
                            <img
                                src={val.productImg}
                                alt=""
                                className="w-[90%] h-[90%] object-cover object-center rounded-md"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Subscribe />
            <Footer />
        </>
    )
}

export default HomePage