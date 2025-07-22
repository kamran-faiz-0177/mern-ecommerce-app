import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Logo and Description */}
        <div className="md:w-1/2">
          <img
            src="./logo.png"
            alt="Trendify Logo"
            className="h-12 mb-4"
          />
          <p className="text-base leading-relaxed">
            Thank you for shopping with Trendify! We're dedicated to bringing you the latest trends and top-quality products. Follow us on social media for updates on new arrivals, exclusive offers, and more. If you have any questions or need assistance, our friendly customer support team is here to help. Subscribe to our newsletter for special discounts and be the first to know about our latest promotions. Your style journey starts here—let's make it unforgettable!
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">COMPANY</h2>
          <ul className="space-y-2 text-base">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Delivery</a></li>
            <li><a href="#" className="hover:underline">Privacy & Policy</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold mb-4">GET IN TOUCH</h2>
          <ul className="space-y-2 text-base">
            <li>+11-234564444</li>
            <li>contact.trendify@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t pt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Trendify. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
