"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState(""); // optional
  const [date, setDate] = useState(""); // optional

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Contact page doesn’t tie to an artist, so we send "General Enquiry"
    const payload = {
      artist: "General Enquiry",
      name,
      email,
      phone,
      date,
      message,
    };

    const res = await fetch("/api/send-enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setLoading(false);

    if (res.ok) {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
      setPhone("");
      setDate("");
    } else {
      alert("Sorry, something went wrong sending your message.");
    }
  };

  if (submitted) {
    return (
      <p className="text-lg text-green-600 font-medium mt-8 text-center">
        Thank you — we’ll be in touch soon!
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-md mx-auto mt-8 text-left"
    >
      {/* Name */}
      <input
        type="text"
        placeholder="Your Name"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email Address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
      />

      {/* Phone (optional) */}
      <input
        type="tel"
        placeholder="Phone Number (optional)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
      />

      {/* Event Date (optional) */}
      <input
        type="date"
        placeholder="Event Date (optional)"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
      />

      {/* Message */}
      <textarea
        placeholder="Tell us about your event..."
        required
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full border rounded-md px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-black"
      />

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-black text-white py-3 rounded-md transition-colors hover:bg-gray-800 cursor-pointer disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
