import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({

  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Consultant R US",
  description: "Consultant R US",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
      suppressHydrationWarning
        className={`${plusJakarta.className} antialiased bg-[#0F1E27] text-white scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
