 
          
     import React, { useState } from "react";
     import { useNavigate } from "react-router-dom";
     import axios from "axios";
     const LoginPage = () => {
       const navigate = useNavigate();
       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");
       const [message, setMessage] = useState("");
     
     
     const handleLogin = async (e) => {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(response);
      const data = await response.data;
      setMessage(data.success);
  
   // If login is successful, you might want to store the token or redirect the user
    if (data.success) {
      localStorage.setItem("token", data.token); // Store token for future requests
      // Redirect to home page or another page as needed
      navigate("/");
    }
  };

  return (
    <section className="bg-gradient-to-r from-indigo-300 from-10% via-violet-200 to-indigo-300">
    <div className="min-h-screen flex items-center justify-center ">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
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
        <button type="submit" className="bg-indigo-700 text-white px-4 py-2 rounded-lg">
          Login
        </button>
        {message && <p className="mt-4 text-red-600">{message}</p>}
      </form>
    </div>
    </section>
    
  );
};

export default LoginPage;
