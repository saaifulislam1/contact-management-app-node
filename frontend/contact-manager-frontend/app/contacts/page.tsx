"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

interface contacts {
  user_id: string;
  name: string;
  email: string;
  phone: string;
}
export default function AllContacts() {
  const router = useRouter();
  const [contact, setContact] = useState<contacts[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/auth/login");
    }
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/contacts/", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          localStorage.removeItem("accessToken");
          router.push("/auth/login");
          throw new Error("Token Expired, Login again");
        }
        const data = await response.json();
        setContact(data);
      } catch (error) {
        setError(` Please try again. ${error}`);
      }
    };
    fetchUser();
  }, [setContact, router]);
  return (
    <div className="pt-20 flex w-full justify-center items-center flex-col">
      <h2 className="text-2xl font-bold mb-6">Contacts</h2>
      <div className="w-full max-w-2xl space-y-4">
        {contact.length > 0 ? (
          contact.map((contact) => (
            <div
              key={contact.user_id}
              className="card bg-base-100 shadow-md p-4"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold">{contact.name}</h3>
                  <p className="text-sm text-gray-600">
                    Email: {contact.email}
                  </p>
                  <p className="text-sm text-gray-600">
                    Phone: {contact.phone}
                  </p>
                  <p className="text-sm text-gray-600">
                    User ID: {contact.user_id}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    //   onClick={() => handleEdit(contact.id)}
                    className="btn btn-sm btn-outline btn-primary"
                  >
                    <FaEdit />
                  </button>
                  <button
                    //   onClick={() => handleDelete(contact.id)}
                    className="btn btn-sm btn-outline btn-error"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className=" w-full justify-center items-center flex-col">
            <p className="self-center text-center">No Conatcts Found</p>
          </div>
        )}
      </div>
    </div>
  );
}
