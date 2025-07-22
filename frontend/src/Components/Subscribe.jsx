import React from 'react';

const Subscribe = () => {
  return (
    <div className="w-[90%] mx-auto my-20">
      {/* Policy Section */}
      <div className="flex flex-col md:flex-row items-center justify-around text-center gap-8">
        <div>
          <img
            src="exchange_icon.png"
            alt="Exchange Icon"
            className="h-12 mx-auto my-2"
          />
          <h2 className="font-semibold text-md">Easy Return & Exchange Policy</h2>
          <p className="font-bold text-lg text-gray-500">
            Easy Returns/exchanges within 10 days.
          </p>
        </div>
        <div>
          <img
            src="quality_icon.png"
            alt="Quality Icon"
            className="h-12 mx-auto my-2"
          />
          <h2 className="font-semibold text-md">Our Quality Policy</h2>
          <p className="font-bold text-lg text-gray-500">
            Trendify ensures top-quality products.
          </p>
        </div>
        <div>
          <img
            src="support_img.png"
            alt="Support Icon"
            className="h-12 mx-auto my-2"
          />
          <h2 className="font-semibold text-md">Best Customer Support</h2>
          <p className="font-bold text-lg text-gray-500">
            We support via email, phone, or chat.
          </p>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="mt-20 flex flex-col justify-center items-center px-4">
        <div className="text-center">
          <h1 className="font-bold text-3xl">Unlock 20% Off | Subscribe Today!</h1>
          <p className="text-lg text-gray-400 my-2">
            Don't miss out—unlock your savings now by subscribing below!
          </p>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl">
          <input
            type="email"
            placeholder="hello@gmail.com"
            className="border border-gray-300 p-2 text-lg w-full sm:flex-1"
          />
          <button className="bg-black text-white w-full sm:w-40 h-11 rounded-sm">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
