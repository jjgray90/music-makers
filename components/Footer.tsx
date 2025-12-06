"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 md:py-12 grid gap-10 md:grid-cols-2">

        {/* LEFT COLUMN — Logo + Name + Navigation */}
        <div>
          {/* Brand name */}
          <p className="text-lg font-serif tracking-wide mb-6">
            Music<span className="text-gray-500">Makers</span>
          </p>

          {/* Navigation */}
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">
            Explore
          </h3>
          <nav className="flex gap-4 text-sm text-gray-700">
            <Link href="/artists" className="hover:text-black">
              Artists
            </Link>
            <span className="text-gray-300">•</span>
            <Link href="/contact" className="hover:text-black">
              Contact
            </Link>
          </nav>
        </div>

        {/* RIGHT COLUMN — Contact + Socials */}
        <div className="flex flex-col items-start md:items-end gap-6">

          {/* Contact */}
          <div className="text-left md:text-right">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
              Contact
            </h3>
            <p className="text-sm text-gray-700">
              <a
                href="mailto:info@music-makers.co.uk"
                className="hover:text-black"
              >
                info@music-makers.co.uk
              </a>
            </p>
          </div>

          {/* Socials */}
          <div className="text-left md:text-right">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
              Follow
            </h3>
            <div className="flex gap-4">

              {/* Instagram */}
              <a
                href="https://instagram.com/musicmakersuk"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-gray-700 hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* Vimeo */}
              <a
                href="https://vimeo.com/musicmakers"
                target="_blank"
                rel="noreferrer"
                aria-label="Vimeo"
                className="text-gray-700 hover:text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M22.12 6.1c-.09 2-1.5 4.75-4.25 8.27-2.84 3.68-5.25 5.52-7.21 5.52-1.22 0-2.26-1.12-3.12-3.37L5.8 11.9c-.43-1.55-.9-2.32-1.41-2.32-.11 0-.51.24-1.18.72L2 9.27c.74-.66 1.47-1.32 2.21-1.98C5.16 6.52 5.9 6.02 6.5 5.9c1.64-.16 2.65.96 3.03 3.36.41 2.59.7 4.2.89 4.83.49 2.22 1.04 3.33 1.66 3.33.47 0 1.18-.7 2.12-2.11.95-1.41 1.45-2.48 1.5-3.23.13-1.22-.35-1.84-1.5-1.84-.54 0-1.09.12-1.66.36 1.1-3.61 3.2-5.36 6.28-5.25 2.29.07 3.38 1.58 3.22 4.52z" />
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-4 text-xs text-gray-500 flex justify-between items-center">
          <span>© Music Makers 2025</span>
          <span className="hidden sm:inline">
            Crafted with love for unforgettable celebrations.
          </span>
        </div>
      </div>
    </footer>
  );
}
