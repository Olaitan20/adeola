import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Transitions from "@/components/Transitions";

export const metadata: Metadata = {
  title: {
    default: "The Image Archive — Photographic Journal",
    template: "%s | The Image Archive",
  },
  description:
    "An immersive digital photobook and personal moving-image archive.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="pb-24">
        <Navigation />
        <Transitions>{children}</Transitions>
        <Footer />
        <Cursor />
      </body>
    </html>
  );
}