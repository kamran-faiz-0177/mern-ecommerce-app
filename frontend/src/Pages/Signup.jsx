import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import api_url from '../utils';

const Signup = () => {
    const [name, setName] = useState("");             // New name state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!name || !email || !password) {
            console.log('All fields are required!');
            return;
        }

        try {
            const url = `${api_url}api/user/signup`;
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            };

            const response = await fetch(url, options);
            const result = await response.json();
            const { success, message, error } = result;

            if (success) {
                console.log(message);
                navigate('/signin');
            } else {
                console.log('Signup failed:', message || error);
            }
        } catch (error) {
            console.error('Network error:', error.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className="w-full h-screen flex items-center justify-center">
                <div className="border-2 border-white bg-white w-[400px] h-[600px] rounded-2xl flex flex-col items-center justify-center gap-6 shadow-lg transform transition-all duration-500 hover:scale-105">
                    <h1 className="text-4xl text-center font-bold text-purple-600">Sign Up</h1>
                    <div className="flex flex-col gap-4 w-[80%]">
                        {/* Name input */}
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            className="p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                        />
                        {/* Email input */}
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                        />
                        {/* Password input */}
                        <input
                            type="password"
                            placeholder="Enter Your Password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition duration-300"
                        />
                    </div>
                    <div className="w-full flex justify-center">
                        <button
                            className="bg-gradient-to-r from-pink-400 to-purple-500 w-[60%] h-[40px] rounded-full text-white font-semibold text-lg shadow-md hover:scale-105 transform transition duration-300"
                            onClick={handleSubmit}
                        >
                            Sign Up
                        </button>
                    </div>
                    <p className="mt-4 text-lg text-center text-gray-600">
                        Already have an account?{' '}
                        <Link to="/signin" className="text-purple-500 font-semibold">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Signup;
