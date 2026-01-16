import * as React from "react";

interface EmailProps {
  artist: string;
  name: string;
  email: string;
  date: string;
  location: string;
  message: string;
  phone?: string;
}

export default function ArtistEnquiryEmail({
  artist,
  name,
  email,
  phone,
  date,
  location,
  message,
}: EmailProps) {
  return (
    <div
      style={{
        fontFamily: "system-ui, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "24px",
        border: "1px solid #eee",
        borderRadius: "12px",
        background: "#ffffff",
      }}
    >
      <h2 style={{ color: "#000", fontSize: "22px" }}>
        New enquiry for <strong>{artist}</strong>
      </h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Phone:</strong> {phone || "Not provided"}
      </p>

      <p>
        <strong>Event date:</strong> {date}
      </p>

      <p>
        <strong>Location:</strong> {location}
      </p>

      <p>
        <strong>Message:</strong>
        <br />
        {message}
      </p>

      <hr style={{ margin: "24px 0", opacity: 0.2 }} />

      <p style={{ fontSize: "12px", color: "#999" }}>
        Sent automatically from Music Makers website.
      </p>
    </div>
  );
}
