import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this is included for routing

export default function HomePage() {
  return (
    <section className="bg-gradient-to-r from-indigo-200 from-20% via-violet-100 to-indigo-100 text-black py-16 h-screen">
      <div className="container mx-auto">
        {/* Center-Aligned Heading */}
        {/* <div className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-8">
            Welcome to The Certificate  Generator & Verification System
          </h1>
        </div> */}

        {/* Flexbox Layout for Left Text and Right Image */}
        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Left Section - Text */}
          <div className="md:w-1/2">
            <p className=" md:text-xl ml-4 md:ml-20 max-w-3xl text-left mt-12 md:mt-52 from-neutral-50 ">
              Welcome to <strong>Certify</strong>, a trusted platform for effortless certificate generation and secure verification. Our mission is to provide fast, reliable, and user-friendly solutions for creating and validating certificates, ensuring trust and transparency in every credential. Whether generating certificates or verifying authenticity, Certify streamlines the process, making it simple and secure for everyone.


</p>
            {/* Buttons for Certificate Generation and Verification */}
            <div className="flex space-x-6 mt-8   md:ml-32">
              <Link to="/generate-certificate">
                <button className=" font-semibold px-4 py-2 bg-gradient-to-r from-indigo-800 from-10% via- to-violet-700 text-white rounded-lg hover:bg-blue-700 transition ">
                  Generate Certificate
                </button>
              </Link>
              <Link to="/verify">
                <button className=" font-semibold px-4 py-2 bg-gradient-to-r from-indigo-700 from-10% via- to-violet-700 text-white rounded-lg hover:bg-green-700 transition">
                  Verify Certificate
                </button>
              </Link>
            </div>
          </div>

          {/* Right Section - Image */}
           <div className="md:max-w-full flex justify-end mt-16 md:mt-32 mr-0 md:mr-16">
            <div>
              <img
                src="/image/Homepage.jpg" // Ensure the correct path
                alt="Demo Certificate"
                className=" max-w-full h-auto  rounded-lg "
              />
            </div>
          </div> 
        </div>
      </div>
    </section>
  );
}
