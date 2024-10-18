"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Flex } from "@/app/components/Flex";

const LoginPage = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  //   if logged in redirect to Dashboard
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    console.log(token, "token in dashbaord");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);
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
        // Redirect to dashboard or home page
        router.push("/dashboard");
      } else {
        setError(data.message || "Login failed");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Something went wrong");
    }
  };

  return (
    <Flex direction="col" justifyContent="center" gap="40px" className="w-full">
      <br />
      <form onSubmit={handleSubmit} className="mt-[100px]">
        <div>
          <span className="badge p-12">Email</span>
          <input
            type="text"
            value={email}
            placeholder="Email"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <span className="badge p-8">Password</span>
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" className="btn btn-accent m-4 ml-[200px]">
          Login
        </button>
      </form>
    </Flex>
  );
};

export default LoginPage;
