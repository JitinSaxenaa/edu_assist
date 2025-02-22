"use client";

import { ChevronUp, ChevronDown } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../images/logo.png";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";

const Navigation = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isSignedIn } = useUser();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Image src={Logo} height={80} className="p-1.5" alt="logo" />
            <span className="text-primary text-2xl font-bold">EduAssist</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-lg font-medium text-gray-800">
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1 focus:outline-none hover:text-primary transition-colors"
              >
                Features{" "}
                {isDropdownOpen ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {isDropdownOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50 animate-fade-in">
                  <ul className="divide-y divide-gray-200">
                    {dropdownItems.map(({ label, href }) => (
                      <li key={label}>
                        <Link
                          href={href}
                          className="flex items-center gap-4 px-6 py-3 hover:bg-gray-100 transition-colors"
                        >
                          <span>{label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Link
              href="#dashboard"
              className="hover:text-primary transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="#support"
              className="hover:text-primary transition-colors"
            >
              Help & Support
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <>
                <SignInButton>
                  <button className="btn-ghost">Login</button>
                </SignInButton>
                <SignUpButton>
                  <button className="btn-primary">Sign Up</button>
                </SignUpButton>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

const dropdownItems = [
  { label: "Attendance Management", href: "/features" },
  { label: "AI-Powered Reports", href: "#reports" },
  { label: "Smart Scheduling", href: "#scheduling" },
  { label: "Parent-Teacher Communication", href: "#communication" },
];

export default Navigation;
