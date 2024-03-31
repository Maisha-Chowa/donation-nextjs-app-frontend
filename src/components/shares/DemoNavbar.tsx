"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "../../assets/images/logo.png";

const items = [
  { key: "1", label: "Home", href: "/" },
  { key: "2", label: "Events", href: "/donations" },
  { key: "3", label: "About Us", href: "/about" },
  // { key: "4", label: "Contact Us", href: "/contact-us" },
];

const DemoNavbar = ({ session }: { session: any }) => {
  const pathname = usePathname();
  const router = useRouter();

  const navigationBtn = (
    <>
      {items?.map((item) => (
        <li className="text-white text-lg" key={item.href}>
          <Link
            className="text-amber-400 no-underline hover:bg-blue-950"
            href={item.href}
          >
            {item.label}
          </Link>
        </li>
      ))}

      {session ? (
        <>
          <li key="5" className="text-white text-lg">
            <Link
              href="/dashboard"
              className="text-amber-400 no-underline hover:bg-blue-950"
            >
              Dashboard
            </Link>
          </li>

          <button
            className="ml-4 bg-amber-400 text-lg  border-none rounded text-white px-2"
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <button
          className="ml-4  bg-amber-400 text-lg border-none rounded text-white px-2"
          onClick={() => {
            router.push("/login");
          }}
        >
          Login
        </button>
      )}
    </>
  );

  return (
    <div className="navbar bg-blue-900">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-warning lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-950 rounded-box w-52 space-y-2"
          >
            {navigationBtn}
          </ul>
        </div>
        <Image className="drop-shadow-2xl h-[2%] w-[20%]" src={logo} alt="" />
        <p className="text-amber-400 text-xl font-bold"> Next Donation</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navigationBtn}</ul>
      </div>
    </div>
  );
};

export default DemoNavbar;
