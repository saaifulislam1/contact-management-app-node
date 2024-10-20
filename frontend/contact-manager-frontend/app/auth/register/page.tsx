"use client";
import { redirect, useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [username, setUserName] = useState<string>("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("http://localhost:5001/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, username }),
      });

      const data = await response.json();

      if (response.ok) {
        // Store JWT token in localStorage
        localStorage.setItem("accessToken", data.accessToken);
        // Redirect to dashboard or home page
        // router.("/dashboard");
        router.push("/auth/login?message=registration-success");
      } else {
        setError(data.message || "Registration failed");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Something went wrong");
    }
  };
  return (
    // <div className="pt-20 flex w-full justify-center items-center flex-col">
    //   {/* <div>Register</div> */}
    //   <form onSubmit={handleSubmit} className="mt-[100px]">
    //     <div>
    //       <span className="badge p-12">Username</span>
    //       <input
    //         type="text"
    //         value={username}
    //         placeholder="Email"
    //         className="input input-bordered w-full max-w-xs"
    //         onChange={(e) => setUserName(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <span className="badge p-12">Email</span>
    //       <input
    //         type="text"
    //         value={email}
    //         placeholder="Email"
    //         className="input input-bordered w-full max-w-xs"
    //         onChange={(e) => setEmail(e.target.value)}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <span className="badge p-8">Password</span>
    //       <input
    //         type="password"
    //         value={password}
    //         placeholder="Enter your password"
    //         className="input input-bordered w-full max-w-xs"
    //         onChange={(e) => setPassword(e.target.value)}
    //         required
    //       />
    //     </div>
    //     {error && <p style={{ color: "red" }}>{error}</p>}

    //     <button type="submit" className="btn btn-accent m-4 ml-[200px]">
    //       Login
    //     </button>
    //   </form>
    // </div>
    <div className="pt-20 flex w-full justify-center items-center flex-col">
      <form onSubmit={handleSubmit} className="mt-12 w-full max-w-sm space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Username</span>
          </label>
          <input
            type="text"
            value={username}
            placeholder="Enter your username"
            className="input input-bordered w-full"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Email</span>
          </label>
          <input
            type="email"
            value={email}
            placeholder="Enter your email"
            className="input input-bordered w-full"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Password</span>
          </label>
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            className="input input-bordered w-full"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <button type="submit" className="btn btn-accent w-full mt-4">
          Register
        </button>
      </form>
    </div>
  );
}
