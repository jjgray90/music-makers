import { NextResponse } from "next/server";
import { Resend } from "resend";
import ArtistEnquiryEmail from "@/components/emails/ArtistEnquiryEmail";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const resend = new Resend(process.env.RESEND_API_KEY);

// Redis connection
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Rate limit: 5 requests per hour per IP
const rateLimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, "1 h"),
});

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? "unknown";

    // Check rate limit
    const { success } = await rateLimit.limit(ip);
    if (!success) {
      return NextResponse.json(
        { success: false, error: "Rate limit exceeded" },
        { status: 429 }
      );
    }

    const { artist, name, email, date, message, phone } = await req.json();

    await resend.emails.send({
      from: "Music Makers <no-reply@music-makers.co.uk>",
      to: process.env.EMAIL_TO!,
      subject: `New enquiry for ${artist}`,
      react: ArtistEnquiryEmail({
        artist,
        name,
        email,
        date,
        message,
        phone
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
