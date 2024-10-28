"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";


const NavBar = () => {
  return (
    <nav className="navbar w-full bg-gradient-to-r from-red-950 to-slate-400 h-14">
        <div className="ml-1 lg:ml-20 hover:cursor-pointer">
            <a href="/" className="text-3xl mr-14 text-white from-base-content font-bold font-mono
             hover:text-slate-400">
                OpenMarineTech
            </a>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex">
            <button className="btn text-white btn-ghost hover:border-slate-400 text-lg font-mono">
                <a href="/diesel">Diesel</a>
            </button>
            <button className="btn text-white btn-ghost hover:border-slate-400 text-lg font-mono">
                <a href="/reefer">Reefer</a>
            </button>
            <button className="btn text-white btn-ghost hover:border-slate-400 text-lg font-mono">
                <a href="/electric_motor">Electric Motor</a>
            </button>
            <button className="btn text-white btn-ghost hover:border-slate-400 text-lg font-mono">
                <a href="/docs">Docs</a>
            </button>
        </div>

        {/* Mobile View */}
        <div className="navbar-end">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu font-bold menu-sm dropdown-content z-auto bg-base-200
                    rounded-box mt-3 w-52 p-2 shadow">
                <li><a href="/diesel">Diesel</a></li>
                <li><a href="/reefer">Reefer</a></li>
                <li><a href="/electric_motor">Electric Motor</a></li>
                <li><a href="/docs">Docs</a></li>
              </ul>
            </div>
        </div>
        

    </nav>
  )
}

export default NavBar