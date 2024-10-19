// components/Header.tsx
"use client";
import Link from "next/link";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const token = localStorage.getItem("accessToken");
  const router = useRouter();

  const navLinks = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Contacts", href: "/contacts" },
    { name: "Login", href: "/auth/login" },
    { name: "Register", href: "/auth/register" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Contact Manager
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "text-primary" : ""}
                  replace
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          {/* Use a button for actions instead of Link when navigating to the same route */}
          <button className="btn btn-primary">
            <Link href="/auth/login" replace>
              Get Started
            </Link>
          </button>
        </div>
      </div>
      {token && (
        <button
          onClick={() => {
            localStorage.removeItem("accessToken");
            Cookies.remove("accessToken");
            router.push("/auth/login");
          }}
          className="btn btn-primary"
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default Header;
