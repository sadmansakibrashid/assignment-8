'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import userAvatar from "@/assets/user.png";


const Header = () => {

const { data: session,isPending } = authClient.useSession();
 
   const user = session?.user;

  console.log(user,isPending, "user");


    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href={"/"}>Home</Link></li>
        <li>
          <Link href={"/AllTiles"}>All Tiles</Link>
        </li>
        <li>
          <Link href={"/"}>My Profile</Link>
        </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       <li><Link href={"/"}>Home</Link></li>
        <li>
          <Link href={"/AllTiles"}>All Tiles</Link>
        </li>
        <li>
          <Link href={"/"}>My Profile</Link>
        </li>
    </ul>
  </div>
  {/* <div className="navbar-end"></div> */}
     {isPending ? (
        <span className="loading loading-spinner loading-lg"></span>
      ) : user ? (
        <div className="navbar-end">
          <h2>Hello, {user.name}</h2>
          <Image
            src={user.image || userAvatar}
            alt="User avatar"
            width={60}
            height={60}
          />
          <button
            className="btn bg-purple-500 text-white"
            onClick={async () => await authClient.signOut()}
          >
            Logout
          </button>
        </div>
      ) : (
        <button className="btn bg-purple-500 text-white">
          <Link href={"/login"}>Login</Link>
        </button>
      )}
    </div>
  );
};

export default Header;