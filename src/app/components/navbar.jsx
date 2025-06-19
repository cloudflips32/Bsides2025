"use client";

import { useState } from "react"
import Link from "next/link"
import { Search, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <nav className="bg-black light:bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-30">
          <Link href="/" className="flex items-center">
            <div className="w-40 h-10 rounded-full bg-purple-700 flex items-center justify-center mr-3 opacity-80">
              <img src="bsideslogo.png" alt="bsides swfl logo" />
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/aboutus" className="light:text-black text-white hover:text-purple-700">
              About Us
            </Link>

            <Link href="/schedule" className="light:text-black text-white hover:text-purple-700">
              Schedule
            </Link>

            <Link href="/speakers" className="light:text-black text-white hover:text-purple-700">
              Speakers
            </Link>

            <Link href="/events" className="light:text-black text-white hover:text-purple-700">
              Events
            </Link>

            <Link href="/workshops" className="light:text-black hidden text-white hover:text-purple-700">
              Workshops
            </Link>

            <Link href="/sponsors" className="light:text-black text-white hover:text-purple-700">
              Sponsors
            </Link>

            <Link href="/volunteer" className="light:text-black text-white hover:text-purple-700">
              Volunteer
            </Link>

            <Link href="/tickets" className="light:text-black text-white hidden hover:text-purple-700">
              Tickets
            </Link>

            <button aria-label="Search" className="light:text-black text-white hover:text-purple-700">
              <Search size={20} />
            </button>
          </div>

          <div className="flex md:hidden items-center">
            <button aria-label="Search" className="text-gray-700 mr-4">
              <Search size={20} />
            </button>

            <button
              onClick={toggleMobileMenu}
              className="text-gray-700"
              aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black shadow-md">
          <div className="flex flex-col space-y-4 mx-2 bg-black">
            <Link href="/aboutus" className="text-orange-200 hover:text-purple-700 bg-black" onClick={toggleMobileMenu}>
              <p className="ml-2 mb-4">About Us</p>
            </Link>

            <Link href="/schedule" className="text-orange-200 hover:text-purple-700 bg-black" onClick={toggleMobileMenu}>
              <p className="ml-2 mb-4">Schedule</p>
            </Link>

            <Link href="/speakers" className="text-orange-200 hover:text-purple-700 bg-black" onClick={toggleMobileMenu}>
              <p className="ml-2 mb-4">Speakers</p>
            </Link>

            <Link href="/events" className="text-orange-200 hover:text-purple-700 bg-black" onClick={toggleMobileMenu}>
              <p className="ml-2 mb-4">Events</p>
            </Link>

            <Link href="/workshops" className="text-orange-200 hidden hover:text-purple-700 bg-black" onClick={toggleMobileMenu}>
              <p className="ml-2 mb-4">Workshops</p>
            </Link>

            <Link href="/sponsors" className="text-orange-200 hover:text-purple-700 bg-black" onClick={toggleMobileMenu}>
              <p className="ml-2 mb-4">Sponsors</p>
            </Link>

            <Link href="/volunteer" className="text-orange-200 hover:text-purple-700 bg-black" onClick={toggleMobileMenu}>
              <p className="ml-2 mb-4">Volunteer</p>
            </Link>

            <Link href="/tickets" className="text-orange-200  hidden hover:text-purple-700 bg-black" onClick={toggleMobileMenu}>
              <p className="ml-2 mb-4">Tickets</p>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar
