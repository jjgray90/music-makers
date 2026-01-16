"use client";

import { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

export default function StickyBookingBar({
  artistName,
}: {
  artistName: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [success, setSuccess] = useState(false);

  // Float vs dock
  const [isFloating, setIsFloating] = useState(true);
  const [dockY, setDockY] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");

  // Show once user has scrolled a bit
  useEffect(() => {
    const handleScrollVisible = () => setIsVisible(window.scrollY > 100);
    window.addEventListener("scroll", handleScrollVisible);
    handleScrollVisible();
    return () => window.removeEventListener("scroll", handleScrollVisible);
  }, []);

  // Measure where this bar lives in the document (for docking)
  useEffect(() => {
    const updateDockY = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setDockY(rect.top + window.scrollY);
    };

    updateDockY();
    window.addEventListener("resize", updateDockY);
    return () => window.removeEventListener("resize", updateDockY);
  }, []);

  // Decide when to float vs dock
  useEffect(() => {
    if (dockY == null) return;

    const handleScroll = () => {
      const viewportBottom = window.scrollY + window.innerHeight;
      // If bottom of viewport is above the bar's natural position,
      // keep it floating. Once we've scrolled past, dock it.
      const shouldFloat = viewportBottom < dockY + 16; // +16px margin
      setIsFloating(shouldFloat);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [dockY]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/send-enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        artist: artistName,
        name,
        email,
        date,
        location,
        message,
        phone,
      }),
    });

    if (res.ok) {
      setSuccess(true);
      setOpenForm(false);

      // Confetti celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.8 },
        colors: ["#d4af37", "#ffffff"],
      });

      // Clear fields
      setName("");
      setEmail("");
      setPhone("");
      setLocation("");
      setMessage("");
      setDate("");
    } else {
      // optional: handle error UI
      console.error("Failed to send enquiry");
    }
  };

  // Only show if floating and past scroll threshold, otherwise visible when docked
  const shouldShow = isFloating ? isVisible : true;

  const positionClasses = isFloating
    ? `
      fixed bottom-4 left-1/2 -translate-x-1/2
      w-[92%] max-w-2xl
    `
    : `
      relative w-full max-w-2xl mx-auto mt-4
    `;

  return (
    <div ref={containerRef} className="w-full">
      <div
        className={`
          bg-white/85 backdrop-blur-xl
          rounded-2xl
          transition-all duration-500
          shadow-[0_8px_24px_rgba(0,0,0,0.12)]
          ${positionClasses}
          ${
            shouldShow
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }
          z-999
        `}
      >
        <div className="relative p-5 flex flex-col gap-4">
          {!success && (
            <p className="text-gray-900 font-serif text-center text-xl">
              Book <span className="font-semibold">{artistName}</span> for your
              event
            </p>
          )}

          {success && (
            <div className="text-center text-gray-900 font-semibold">
              Thank you — your enquiry has been sent!
            </div>
          )}

          {/* CTA BUTTON */}
          {!openForm && !success && (
            <button
              onClick={() => setOpenForm(true)}
              className="
                mx-auto px-8 py-3 
                rounded-md 
                text-white 
                font-medium 
                bg-linear-to-r from-[#d4af37] to-[#e7d083]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]
                hover:brightness-110
                cursor-pointer
                transition-all
              "
            >
              Check availability
            </button>
          )}

          {/* FORM */}
          {openForm && !success && (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Artist */}
              <div>
                <label className="block text-sm font-medium mb-1">Artist</label>
                <input
                  value={artistName}
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700"
                />
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>

              {/* Phone (optional) */}
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Your phone number"
                />
              </div>

              {/* Event Date */}
              <div className="w-full min-w-0">
                <label className="block text-sm font-medium mb-1">
                  Event Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="
                    w-full 
                    min-w-0 
                    max-w-full 
                    px-3 py-2 
                    border border-gray-300 
                    rounded-md 
                    focus:outline-none 
                    focus:ring-2 focus:ring-black
                    text-[16px]
                    box-border
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Location
                </label>
                <input
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Where is your event?"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md h-24"
                  placeholder="Tell us about your event..."
                />
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setOpenForm(false)}
                  className="text-sm text-gray-600 hover:underline cursor-pointer"
                >
                  Close enquiry
                </button>

                <button
                  type="submit"
                  className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition cursor-pointer"
                >
                  Send enquiry
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
