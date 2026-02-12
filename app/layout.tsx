import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GreenScapes - Professional Landscaping Services",
  description: "Transform your outdoor living space with GreenScapes. Professional landscaping, garden design, and lawn care services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
