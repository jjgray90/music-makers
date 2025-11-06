"use client"; // Client Component (form interactivity)

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="max-w-lg mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-semibold mb-6">Get in Touch</h1>
      <p className="text-gray-600 mb-8">
        Tell us about your wedding or event, and we’ll help you find the perfect music.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <input className="w-full border rounded-md px-4 py-3" placeholder="Your Name" required />
          <input type="email" className="w-full border rounded-md px-4 py-3" placeholder="Email Address" required />
          <textarea className="w-full border rounded-md px-4 py-3" placeholder="Your Message" required />
          <button type="submit" className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 transition">
            Send Message
          </button>
        </form>
      ) : (
        <p className="text-lg text-green-600 font-medium mt-8">Thanks for reaching out! We’ll get back to you soon.</p>
      )}
    </section>
  );
}
