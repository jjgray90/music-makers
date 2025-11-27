"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState(""); // optional
  const [date, setDate] = useState(""); // optional

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      artist: "General Enquiry", // fits your existing API route
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
      setPhone("");
      setDate("");
      setMessage("");
    } else {
      alert("Something went wrong sending your message.");
    }
  };

  return (
    <section className="max-w-lg mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-semibold mb-6">Get in Touch</h1>
      <p className="text-gray-600 mb-8">
        Tell us about your wedding or event, and we’ll help you find the perfect
        music.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          {/* Name */}
          <input
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Email */}
          <input
            type="email"
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Phone (optional) */}
          <input
            type="tel"
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Phone Number (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* Event Date (optional) */}
          <input
            type="date"
            className="w-full max-w-full min-w-0 border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Event Date (optional)"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          {/* Message */}
          <textarea
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-black text-white py-3 rounded-md transition-colors 
              hover:bg-gray-800 cursor-pointer disabled:opacity-50`}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      ) : (
        <p className="text-lg text-green-600 font-medium mt-8">
          Thanks for reaching out! We’ll get back to you soon.
        </p>
      )}
    </section>
  );
}
