import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="flex items-center justify-center h-[90vh] relative overflow-hidden bg-fixed">
      {/* Background image with soft overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.png" // replace with your chosen background image
          alt="Wedding celebration background"
          fill
          priority
          className="object-cover object-center brightness-90"
        />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-xs"></div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-40 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-light tracking-tight text-gray-900 mb-6">
          Timeless Music for Unforgettable Weddings
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-10">
          Curating world-class artists to bring elegance, emotion, and energy to your
          most special day.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/artists"
            className="bg-black text-white px-6 py-3 rounded-md text-base md:text-lg hover:bg-gray-800 transition"
          >
            Meet Our Artists
          </Link>
          <Link
            href="/contact"
            className="border border-black px-6 py-3 rounded-md text-base md:text-lg hover:bg-black hover:text-white transition"
          >
            Book Your Event
          </Link>
        </div>
      </div>
    </section>
  );
}
