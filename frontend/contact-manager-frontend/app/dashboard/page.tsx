"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface User {
  username: string;
  id: string;
  email: string;
}
export default function DashBoard() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState<User | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState<boolean>(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    console.log(token, "token in dashbaord");
    if (!token) {
      router.push("/auth/login");
    }
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:5001/api/users/current",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          localStorage.removeItem("accessToken");
          router.push("/auth/login");
          throw new Error("Token Expired");
        }
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        setError(`Failed to fetch user data. Please try again. ${error}`);
        setLoading(false);
      }
    };
    fetchUser();
  }, [router]);
  return (
    <div>
      Dashboard
      <h1>{user?.username}</h1>
      <h1>{user?.email}</h1>
    </div>
  );
}
