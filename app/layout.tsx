import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const incoming = await headers();
  const host = incoming.get("host") ?? "localhost:3000";
  const forwardedProtocol = incoming.get("x-forwarded-proto");
  const protocol = forwardedProtocol ?? (host.includes("localhost") ? "http" : "https");
  const base = new URL(`${protocol}://${host}`);
  const title = "Chaitanya Sai Gandi | Full-Stack Java Developer & AI Engineer";
  const description =
    "Full-Stack Java Developer and AI Engineer in Toronto building secure microservices, intelligent products, cloud systems, and grounded AI applications.";

  return {
    metadataBase: base,
    title,
    description,
    authors: [{ name: "Chaitanya Sai Gandi", url: base.toString() }],
    creator: "Chaitanya Sai Gandi",
    category: "Software Engineering",
    keywords: [
      "Full-Stack Java Developer",
      "AI Engineer",
      "Spring Boot",
      "React",
      "Next.js",
      "FastAPI",
      "Microservices",
      "Toronto Software Engineer",
    ],
    alternates: { canonical: "/" },
    openGraph: {
      title,
      description,
      type: "website",
      url: base,
      images: [{ url: new URL("/og.png", base).toString(), width: 1536, height: 1024, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [new URL("/og.png", base).toString()],
    },
  };
}

export const viewport = {
  themeColor: "#050608",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chaitanya Sai Gandi",
    jobTitle: "Full-Stack Java Developer and AI Engineer",
    address: { "@type": "PostalAddress", addressLocality: "Toronto", addressRegion: "ON", addressCountry: "CA" },
    email: "mailto:chaitanyagandi2000@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/chaitanyagandi/",
      "https://github.com/CHAITANYAGANDI",
    ],
    alumniOf: { "@type": "CollegeOrUniversity", name: "Northeastern University" },
    knowsAbout: ["Java", "Spring Boot", "React", "Next.js", "Python", "FastAPI", "Microservices", "Artificial Intelligence"],
  };
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
