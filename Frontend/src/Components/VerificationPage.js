import React, { useState } from 'react';

export default function VerificationPage() {
  const [certificateNumber, setCertificateNumber] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);

  const handleVerify = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/certificates/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ certificateNumber }),
    });
    const data = await response.json();
    setVerificationResult(data);
  };

  return (
    <section className="bg-gradient-to-r from-indigo-300 from-10% via-violet-200 to-indigo-300"> 
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleVerify} className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Verify Certificate</h2>
        <input
          type="text"
          placeholder="Certificate no"
          value={certificateNumber}
          onChange={(e) => setCertificateNumber(e.target.value)}
          className="border px-3 py-2 rounded-lg mb-4 w-full"
          required
        />
        <button type="submit" className="bg-indigo-700 text-white px-4 py-2 rounded-lg">Verify</button>
      </form>

      {verificationResult && (
        <div className="mt-6">
          {verificationResult.success ? (
            <p className="text-green-600">Certificate is valid!</p>
          ) : (
            <p className="text-red-600">Certificate is invalid.</p>
          )}
        </div>
      )}
    </div>
    </section>
  );
}
