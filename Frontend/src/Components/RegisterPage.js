      
    import React, { useState } from "react";
    import axios from "axios";
    
    const RegisterPage = () => {
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");
      const [message, setMessage] = useState(""); // For success or error message
    
      const handleRegister = async (e) => {
        e.preventDefault();
    
        // Password match validation
        if (password !== confirmPassword) {
          setMessage("Passwords do not match");
          return;
        }
    
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response);
      const data = await response.data.json();

      if (!response.ok) {
        // If the response is not OK, show the error message
        throw new Error(data.message || "Registration failed");
      }
 // Success message
       setMessage("Registration successful! You can now login.");
       // Clear form fields
       setEmail("");
       setPassword("");
       setConfirmPassword("");
     } catch (error) {
       // Display error message
       setMessage(An error occurred: $ {error.message});
     }
   };
 
 

  return (
    <section className="bg-gradient-to-r from-indigo-300 from-10% via-violet-200 to-indigo-300">
      <div className="min-h-screen flex items-center justify-center">
        <form onSubmit={handleRegister} className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Register</h2>
          
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border px-3 py-2 rounded-lg mb-4 w-full"
            required
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border px-3 py-2 rounded-lg mb-4 w-full"
            required
          />
          
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="border px-3 py-2 rounded-lg mb-4 w-full"
            required
          />
          <input
            type="text"
            placeholder="Admin or Student"
            value={adminOrStudent}
            onChange={(e) => setAdminOrStudent(e.target.value)}
            className="border px-3 py-2 rounded-lg mb-4 w-full"
            required
          />
          
          <button type="submit" className="bg-indigo-700 text-white px-4 py-2 rounded-lg">
            Register
          </button>

          {/* Show success or error message */}
          {message && <p className="mt-4 text-center">{message}</p>}
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
