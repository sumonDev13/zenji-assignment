"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-zenji-gray-dark/30 bg-zenji-black/95 sticky top-0 z-50 border-b backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-display text-2xl tracking-wider">
              ZENJI
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                href="/drop"
                className="hover:text-zenji-red text-sm tracking-wider uppercase transition-colors"
              >
                Drop
              </Link>
              <Link
                href="/collection"
                className="hover:text-zenji-red text-sm tracking-wider uppercase transition-colors"
              >
                Collection
              </Link>
              <Link
                href="/lookbook"
                className="hover:text-zenji-red text-sm tracking-wider uppercase transition-colors"
              >
                Lookbook
              </Link>
              <Link
                href="/our-story"
                className="hover:text-zenji-red text-sm tracking-wider uppercase transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Desktop Icons */}
          <div className="hidden items-center space-x-5 md:flex">
            {/* Search Icon */}
            <button
              className="hover:text-zenji-red transition-colors"
              aria-label="Search"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* User Icon */}
            <button
              className="hover:text-zenji-red transition-colors"
              aria-label="Account"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Cart Icon */}
            <button
              className="hover:text-zenji-red relative transition-colors"
              aria-label="Cart"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="bg-zenji-red absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold text-white">
                0
              </span>
            </button>
          </div>

          {/* Mobile Icons */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Search Icon */}
            <button
              className="hover:text-zenji-red transition-colors"
              aria-label="Search"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Cart Icon */}
            <button
              className="hover:text-zenji-red relative transition-colors"
              aria-label="Cart"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <span className="bg-zenji-red absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold text-white">
                0
              </span>
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              <div className="flex h-5 w-6 flex-col justify-between">
                <span
                  className={`bg-zenji-white h-0.5 w-full transition-all duration-300 ${
                    isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <span
                  className={`bg-zenji-white h-0.5 w-full transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`bg-zenji-white h-0.5 w-full transition-all duration-300 ${
                    isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-zenji-gray/50 space-y-4 px-4 py-6">
          <Link
            href="/drop"
            className="hover:text-zenji-red block text-sm tracking-wider uppercase transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Drop
          </Link>
          <Link
            href="/collection"
            className="hover:text-zenji-red block text-sm tracking-wider uppercase transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Collection
          </Link>
          <Link
            href="/lookbook"
            className="hover:text-zenji-red block text-sm tracking-wider uppercase transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Lookbook
          </Link>
          <Link
            href="/our-story"
            className="hover:text-zenji-red block text-sm tracking-wider uppercase transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Story
          </Link>
          <div className="border-zenji-gray-dark/30 flex items-center space-x-6 border-t pt-4">
            <button
              className="hover:text-zenji-red transition-colors"
              aria-label="Search"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              className="hover:text-zenji-red transition-colors"
              aria-label="Account"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
