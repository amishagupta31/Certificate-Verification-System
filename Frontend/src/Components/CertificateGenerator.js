import React, { useState } from 'react';

export default function CertificateGenerator() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [domain, setDomain] = useState(''); // New field
  const [date, setDate] = useState(''); // New field
  const[founder,setFounder] =useState('');
  const [certificate, setCertificate] = useState(null);
  
  const [error, setError] = useState(null); // State to store error messages

  const handleGenerate = async (e) => {
    e.preventDefault();
    setError(null); // Reset error before new request

    try {
      const response = await fetch('http://localhost:5000/api/certificates/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, domain, date }), // Include new fields
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setCertificate(result); // Set the received certificate
      console.log(result);
    } catch (error) {
      console.error('Fetch error:', error);
      setError(error.message); // Set error message to display to the user
    }
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
            
            onChange={(e) => setDate(e.target.value)}
            className="border px-3 py-2 rounded-lg mb-4 w-full"
            required
          />
          <input
            type="date"
            value={date}
            
            onChange={(e) => setDate(e.target.value)}
            className="border px-3 py-2 rounded-lg mb-4 w-full"
            required
          />
           

          <button type="submit" className="bg-indigo-700 text-white px-7 py-2 rounded-lg font-semibold">Generate</button>
          <button type="submit" className="bg-indigo-700 text-white px-7 py-2 rounded-lg ml-4 font-semibold">Download</button>
        </form>

        

        {certificate && (
          <div className="min-h-40 bg-white border p-4 flex flex-col items-center mt-4 mb-6 max-w-full"> 
            <div className="border p-4 rounded-lg shadow-lg bg-white max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-center">Certificate of Achievement</h2>
              <p className="mt-4 text-2xl ">This certifies that {certificate.name} has successfully completed the course in {certificate.domain}</p>
              <p className="mt-4 text-lg">Certificate Number: {certificate.certificateNumber}</p>
              <img src={certificate.qrCode} alt="QR Code" className="mt-4 mx-auto" />
              <p className="mt-4 text-sm text-gray-500">Issued on: {new Date(certificate.issuedDate).toLocaleDateString()}</p> {/* Adjusted to use issuedDate */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
