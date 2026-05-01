import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "../components/Footer";

export const viewport: Viewport = {
  themeColor: "#0E832A",
};

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Mahoney Controls",
  description: "Mahoney Controls",
  icons: {
    icon: "/icons/favicon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    images: [{ url: "/icons/og-image.jpg" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
