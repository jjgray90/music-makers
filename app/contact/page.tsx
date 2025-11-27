"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

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
        Tell us about your wedding or event, and we’ll help you find the perfect music.
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6 text-left">

          <input
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black text-[16px]"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black text-[16px]"
            placeholder="Email Address"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Phone */}
          <input
            type="tel"
            className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black text-[16px]"
            placeholder="Phone Number (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          {/* Event Date — FIXED */}
          <div className="w-full min-w-0">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="
                w-full 
                min-w-0 
                max-w-full 
                box-border
                px-4 py-3
                border rounded-md 
                focus:outline-none focus:ring-2 focus:ring-black
                text-[16px]
              "
            />
          </div>

          <textarea
            className="w-full border rounded-md px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-black text-[16px]"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded-md transition-colors hover:bg-gray-800 cursor-pointer disabled:opacity-50 text-[16px]"
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
