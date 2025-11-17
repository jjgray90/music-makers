"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/artists", label: "Artists" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock background scroll on mobile
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <nav className="sticky top-0 w-full bg-white/70 backdrop-blur-md z-999">
        <div className="max-w-6xl mx-auto px-6 py-4 grid md:grid-cols-3 grid-cols-2 items-center relative">
          {/* Desktop brand text */}
          <div className="hidden md:block justify-self-start">
            <Link
              href="/"
              className="hidden md:block text-2xl font-serif tracking-wide"
            >
              Music<span className="text-gray-400">Makers</span>
            </Link>
          </div>

          {/* Logo remains visible even when menu is open */}
          <div className="justify-self-start md:justify-self-center z-1001">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Music Makers logo"
                width={80}
                height={24}
                className="object-contain"
              />
            </Link>
          </div>

          <div className="justify-self-end md:flex items-center gap-6">
            {/* Desktop links */}
            <div className="hidden md:flex gap-8 text-lg font-light">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="hover:text-gray-400 transition"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Burger */}
            <button
              onClick={() => setOpen((s) => !s)}
              className="md:hidden relative w-10 h-10 flex items-center z-1001"
              aria-label="Toggle menu"
            >
              <motion.span
                className="absolute h-0.5-7 bg-black"
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="absolute h-0.5-7 bg-black"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="absolute h-0.5 w-7 bg-black"
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* FULLSCREEN MOBILE OVERLAY */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center z-998"
          >
            <nav className="flex flex-col gap-10 text-3xl font-medium text-gray-800">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="hover:text-gray-400 transition"
                >
                  {label}
                </Link>
              ))}
            </nav>

            <div className="mt-12">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="px-8 py-3 border border-gray-400 rounded-md text-gray-400 hover:bg-gray-400 hover:text-white transition"
              >
                Book an event
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
