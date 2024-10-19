"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState("");

  // Handling Message from Registration page Redirection
  useEffect(() => {
    const successMessage = searchParams.get("message");
    if (successMessage === "registration-success") {
      setMessage("Registration successful! Please log in.");
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("http://localhost:5001/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      console.log(data.accessToken);

      if (response.ok) {
        // Store JWT token in localStorage
        localStorage.setItem("accessToken", data.accessToken);
        document.cookie = `accessToken=${data.accessToken}; path=/; max-age=60`;

        // Redirect to dashboard or home page
        window.location.href = "/dashboard";
      } else {
        setError(data.message || "Login failed");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    // <div>
    //   <br />
    //   <form onSubmit={handleSubmit} className="mt-[100px]">
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
      {message && (
        <p className="text-[24px] text-white font-extrabold">{message}</p>
      )}
      <form onSubmit={handleSubmit} className="mt-12 w-full max-w-sm space-y-4">
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
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
