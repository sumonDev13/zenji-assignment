"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="border-b border-zenji-gray-dark/30 sticky top-0 z-50 bg-zenji-black/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-display tracking-wider">
              ZENJI
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                href="/drop"
                className="text-sm uppercase tracking-wider hover:text-zenji-red transition-colors"
              >
                Drop
              </Link>
              <Link
                href="/collection"
                className="text-sm uppercase tracking-wider hover:text-zenji-red transition-colors"
              >
                Collection
              </Link>
              <Link
                href="/lookbook"
                className="text-sm uppercase tracking-wider hover:text-zenji-red transition-colors"
              >
                Lookbook
              </Link>
              <Link
                href="/our-story"
                className="text-sm uppercase tracking-wider hover:text-zenji-red transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm uppercase tracking-wider hover:text-zenji-red transition-colors">
              Search
            </button>
            <button className="text-sm uppercase tracking-wider hover:text-zenji-red transition-colors">
              Cart (0)
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="text-sm uppercase tracking-wider hover:text-zenji-red transition-colors">
              Cart (0)
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-zenji-white transition-all duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-zenji-white transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-zenji-white transition-all duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 py-6 space-y-4 bg-zenji-gray/50">
          <Link
            href="/drop"
            className="block text-sm uppercase tracking-wider hover:text-zenji-red transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Drop
          </Link>
          <Link
            href="/collection"
            className="block text-sm uppercase tracking-wider hover:text-zenji-red transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Collection
          </Link>
          <Link
            href="/lookbook"
            className="block text-sm uppercase tracking-wider hover:text-zenji-red transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Lookbook
          </Link>
          <Link
            href="/our-story"
            className="block text-sm uppercase tracking-wider hover:text-zenji-red transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Story
          </Link>
          <div className="pt-4 border-t border-zenji-gray-dark/30">
            <button className="block text-sm uppercase tracking-wider hover:text-zenji-red transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
