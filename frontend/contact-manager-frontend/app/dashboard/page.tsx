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
  }, [router, setUser]);
  return (
    <div className="p-6 bg-base-200 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="card shadow-lg bg-base-100">
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">Dashboard</h2>
            <div className="mt-4">
              <p className="text-lg">
                <span className="font-semibold">Name:</span>
                {user?.username}
              </p>
              <p className="text-lg">
                <span className="font-semibold">Email:</span> {user?.email}
              </p>
            </div>
          </div>
        </div>

        {/* Additional Sections for the Dashboard */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="card bg-base-100 shadow-md p-4">
            <h3 className="text-xl font-bold">Recent Activity</h3>
            <p className="text-sm mt-2 text-gray-600">
              No recent activity to show.
            </p>
          </div>
          <div className="card bg-base-100 shadow-md p-4">
            <h3 className="text-xl font-bold">Statistics</h3>
            <p className="text-sm mt-2 text-gray-600">
              No statistics available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
