"use client";

interface BookingCTAProps {
  artistName: string;
}

export default function BookingCTA({ artistName }: BookingCTAProps) {
  return (
    <div className="mt-16 text-center py-10 px-6 bg-white/70 backdrop-blur-md rounded-2xl border border-gray-200">
      <h3 className="text-2xl font-serif mb-3">Like what you see?</h3>

      <p className="text-gray-600 mb-6">
        Enquire now to check {artistName}’s availability for your special day.
      </p>

      <a
        href={`/contact?artist=${encodeURIComponent(artistName)}`}
        className="px-8 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
      >
        Book this artist
      </a>
    </div>
  );
}
