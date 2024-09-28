import React, { useState } from 'react';
import jsPDF from "jspdf";
import { QRCodeSVG } from "qrcode.react";
import html2canvas from "html2canvas";


export default function CertificateGenerator() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [domain, setDomain] = useState(''); 
  const [startdate, setDate] = useState('');
   const [enddate, setDate] = useState('');
  const[founder,setFounder] =useState('');
   const [certificateVisible, setCertificateVisible] = useState(false);
const certificateNumber = Math.random().toString(36).substring(2, 15);

  
  const [error, setError] = useState(null); // State to store error messages

   const handleDownload = () => {
    const input = document.getElementById("certificate");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
      pdf.save("certificate.pdf");
    });
  };



  return (
    <section className="bg-gradient-to-r from-indigo-300 via-violet-200 to-indigo-300 min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center"> {/* Center the entire content vertically */}
        <form onSubmit={handleGenerate} className="bg-white p-8 rounded-lg shadow-md mb-8 max-w-fit">
          <h2 className="text-2xl font-bold mb-4">Generate Certificate</h2>
          
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border px-3 py-2 rounded-lg mb-4 w-full"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-3 py-2 rounded-lg mb-4 w-full"
            required
          />
          
          {/* New input fields */}
          <input
            type="text"
            placeholder="Domain"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="border px-3 py-2 rounded-lg mb-4 w-full"
            required
          />
          <input
            type="text"
            placeholder="Company Name"
            value={founder}
            onChange={(e) => setFounder(e.target.value)}
            className="border px-3 py-2 rounded-lg mb-4 w-full"
            required
          />
          <input
            type="date"
            value={date}
            
            onChange={(e) => setstartDate(e.target.value)}
            className="border px-3 py-2 rounded-lg mb-4 w-full"
            required
          />
          <input
            type="date"
            value={date}
            
            onChange={(e) => setendDate(e.target.value)}
            className="border px-3 py-2 rounded-lg mb-4 w-full"
            required
          />
           

          <button type="submit" className="bg-indigo-700 text-white px-7 py-2 rounded-lg font-semibold">Generate</button>
          <button type="submit" className="bg-indigo-700 text-white px-7 py-2 rounded-lg ml-4 font-semibold">Download</button>
        </form>
{/* Certificate layout */}
        {certificateVisible && (
          <div className="relative p-7  mt-10 mb-4 w-[800px]  text-center">
            {/* Outer Border */}
            <div className="absolute inset-0 rounded-lg border-8 border-indigo-900"></div>
            {/* Inner Content with Inner Border */}
            <div
              id="certificate"
              className="relative p-8 rounded-lg border-4 border-amber-300"
              style={{
                borderRadius: "10px",
              }}>
          <img src={logo} alt="Company Logo" className="mb-4 w-32 mx-auto" /> {/* Adjust width as needed */}
              
              <p className="absolute text-3xl font-bold text-xs left-2 top-2 text-grey-70">
                Certificate No: {certificateNumber}
              </p>
              <h2 className="text-5xl mt-20 font-bold text-blue-600">
                CERTIFICATE OF COMPLETION
              </h2>
              <p className="text-2xl mt-8">This certifies that</p>
              <p className="mt-8 text-6xl font-semibold">{name}</p>
              <p className="mt-6 text-2xl">has completed the course</p>
              <h3 className="text-4xl mt-8 font-semibold">{course}</h3>
              {/* Date Range */}
              <p className="mt-8 font-bold">
                {startDate} to {endDate}
              </p>
              <p className="mt-8 text-2xl">
                We found him/her sincere,hardworking,dedicated.
                <br />
                She/He worked well as part of the team during his/her work.{" "}
                <br />
                We take this opportunity to thank him/her and wish him/her all
                the best for your future.{" "}
              </p>
              <div className="mt-18 p-1 ">
                <QRCodeSVG value={certificateNumber} size={85} />
              </div>

              {/* Right Side: Founder */}
              <div className="text-right mb-16">
                <p className="font-bold text-3xl">{founder}</p>
                <p className="text-2xl  font-bold">Founder</p>
              </div>
                </div>
          </div>
        )}
      </div>
   
    </section>
  );
}
