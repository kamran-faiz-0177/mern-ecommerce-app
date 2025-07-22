import React from 'react'
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState, useEffect } from 'react';
import api_url from '../utils';

const Collection = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(false);

  const FetchProduct = async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  }

  const FetchProductByCategory = async (productCategory) => {
    setLoading(true);
    try {
      console.log(productCategory);
      const url = `${api_url}api/product/fetch/${productCategory}`;
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
    } finally {
      setLoading(false);
    }
  }

  const handleCategoryChange = (productCategory) => {
    setSelectedCategory(productCategory);
    if (productCategory === 'all') {
      FetchProduct();
    } else {
      FetchProductByCategory(productCategory);
    }
  }

  useEffect(() => {
    FetchProduct();
  }, [])

  return (
    <>
      <Navbar />
      <div className='min-h-screen bg-gray-50 mt-20'>
        <div className='container mx-auto px-4 py-8 max-w-7xl'>
          <div className='flex flex-col lg:flex-row gap-8'>
            {/* Filter Sidebar */}
            <div className='w-full lg:w-1/4'>
              <div className='bg-white rounded-lg shadow-md p-6 sticky top-4'>
                <h2 className='text-2xl font-bold text-gray-800 mb-6 border-b pb-3'>
                  FILTERS
                </h2>
                <div className='space-y-4'>
                  <h3 className='text-lg font-semibold text-gray-700 mb-3'>Category</h3>
                  <div className='space-y-3'>
                    <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
                      <input
                        type="radio"
                        name="category"
                        value="all"
                        checked={selectedCategory === 'all'}
                        onChange={() => handleCategoryChange('all')}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="text-gray-700 font-medium">All Products</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
                      <input
                        type="radio"
                        name="category"
                        value="Men"
                        checked={selectedCategory === 'Men'}
                        onChange={() => handleCategoryChange('Men')}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="text-gray-700 font-medium">Men</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
                      <input
                        type="radio"
                        name="category"
                        value="Women"
                        checked={selectedCategory === 'Women'}
                        onChange={() => handleCategoryChange('Women')}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="text-gray-700 font-medium">Women</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
                      <input
                        type="radio"
                        name="category"
                        value="Children"
                        checked={selectedCategory === 'Children'}
                        onChange={() => handleCategoryChange('Children')}
                        className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                      />
                      <span className="text-gray-700 font-medium">Children</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className='w-full lg:w-3/4'>
              <div className='bg-white rounded-lg shadow-md p-6'>
                <div className='text-center mb-8'>
                  <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-2'>
                    LATEST COLLECTIONS
                  </h1>
                  <div className='w-24 h-1 bg-blue-600 mx-auto rounded-full'></div>
                  <p className='text-gray-600 mt-3 capitalize'>
                    {selectedCategory === 'all' ? 'All Products' : selectedCategory}
                  </p>
                </div>

                {loading ? (
                  <div className='flex justify-center items-center h-64'>
                    <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products?.length > 0 ? (
                      products.map(val => (
                        <div key={val._id} className="group cursor-pointer">
                          <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300">
                            <img
                              src={val.productImg}
                              alt={val.productName || "Product"}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                            />
                          </div>
                          {val.productName && (
                            <div className="mt-3">
                              <h3 className="text-sm font-medium text-gray-800 truncate">
                                {val.productName}
                              </h3>
                              {val.price && (
                                <p className="text-lg font-bold text-gray-900 mt-1">
                                  ${val.price}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-12">
                        <div className="text-gray-500 text-lg">
                          No products found in this category
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Collection