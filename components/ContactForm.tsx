"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <p className="text-lg text-green-600 font-medium mt-8">
        Thank you — we’ll be in touch soon!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md mx-auto mt-8 text-left"
    >
      <input
        type="text"
        placeholder="Your Name"
        required
        className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-black"
      />
      <input
        type="email"
        placeholder="Email Address"
        required
        className="w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-black"
      />
      <textarea
        placeholder="Tell us about your event..."
        required
        className="w-full border rounded-md px-4 py-3 h-32 focus:ring-2 focus:ring-black"
      />
      <button
        type="submit"
        className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition"
      >
        Send Message
      </button>
    </form>
  );
}
