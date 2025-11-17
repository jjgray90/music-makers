"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export function NavBarTwo() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif tracking-wide">
          Harmony Artists
        </Link>

        {/* Burger button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="absolute h-0.5 w-6 bg-black transition-all"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="absolute h-0.5 w-6 bg-black"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="absolute h-0.5 w-6 bg-black transition-all"
          />
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-8 text-lg">
          <Link href="/artists" className="hover:opacity-70 transition">
            Artists
          </Link>
          <Link href="/about" className="hover:opacity-70 transition">
            About
          </Link>
          <Link href="/contact" className="hover:opacity-70 transition">
            Contact
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full left-0 w-full bg-white/90 backdrop-blur-xl border-b border-neutral-200 shadow-lg"
          >
            <div className="flex flex-col items-center gap-6 py-8 text-lg">
              <Link href="/artists" onClick={() => setOpen(false)}>
                Artists
              </Link>
              <Link href="/about" onClick={() => setOpen(false)}>
                About
              </Link>
              <Link href="/contact" onClick={() => setOpen(false)}>
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
