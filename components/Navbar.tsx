"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/artists", label: "Artists" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-[10vh] border-b border-gray-200 bg-white/60 backdrop-blur-md sticky top-0 z-50">
      <div className=" max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="hidden md:block text-2xl font-serif tracking-wide"
        >
          Music<span className="text-gray-500">Makers</span>
        </Link>

        <Link href="/">
          <Image src="/logo.png" alt={"Music Makers logo"} width={80} height={10} />
        </Link>

        <button
          className="md:hidden text-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8 text-gray-700`}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`block mt-4 md:mt-0 ${
                pathname === href
                  ? "text-black font-semibold"
                  : "hover:text-black"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
