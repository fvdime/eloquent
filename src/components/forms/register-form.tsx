"use client";

import React, { useState } from "react";
import axios from "axios";

export default function RegisterForm() {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
  
    const formData = new FormData();
  
    formData.append("email", email);
    formData.append("password", password);
  
    console.log("Form submitted with:", formData);
  
    try {
      const response = await axios.post("http://localhost:3000/api/auth/login", formData);
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit} className="text-black">
        {/* <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          maxLength={500}
          placeholder="Name"
        /> */}
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          maxLength={500}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          maxLength={500}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
