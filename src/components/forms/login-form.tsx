"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from "next/navigation";
import { loginUser, registerUser } from "@/actions/auth.action";

export default function LoginForm() {
  const router = useRouter();

  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const user = await loginUser({ email, password})
      console.log(user)
      
      toast.success('Successfully!')
      router.push("/admin")
      
      console.log("Response:", user);
    } catch (error) {
      router.refresh()
      toast.error('Permission denied!')
      console.error("Error:", error);
    }

  };

  return (
    <div className="flex flex-row justify-center items-center h-full w-screen">
      <div className="hidden md:flex h-screen w-3/12 bg-zinc-950 p-4"></div>
      <form
        onSubmit={handleSubmit}
        className="h-full w-full md:w-6/12 py-16 px-8 md:px-16  flex flex-col justify-center"
      >
        <div className="flex items-center justify-center mb-5">
          <p className="text-3xl font-medium">Welcome back Admin!</p>
        </div>
        <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300"></div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            maxLength={500}
            placeholder="Email"
            className="w-full py-1.5 border placeholder:text-sm px-4 rounded-full border-zinc-400"
          />
        </div>
        <div className="mb-8">
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            maxLength={500}
            placeholder="Password"
            className="w-full py-1.5 border placeholder:text-sm px-4 rounded-full border-zinc-400"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="hover:text-white font-medium border-zinc-950 border hover:bg-zinc-950 text-zinc-950 duration-500 ease-in transition-all focus:ring-4 rounded-full w-full px-5 py-1.5 text-center"
          >
            Sign In
          </button>

          <p className="mb-0 mt-4 pt-1 text-sm font-medium text-center">
            Not an admin?
            <Link
              href="/"
              className="ml-2 text-sky-600 transition duration-150 ease-in-out hover:text-sky-700 focus:text-sky-800 active:text-sky-600 cursor-pointer"
            >
              Return to home
            </Link>
          </p>
        </div>
      </form>
      <div className="hidden md:flex h-screen w-3/12"></div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}
