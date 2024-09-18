import React from "react";
import "../styles/globals.scss";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import AstralRose from "@/components/AstralRose";

export const metadata = {
  title: "ASTRAL ROSE ONLINE",
  description: "ASTRAL ROSE ONLINE MMORPG",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AstralRose />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
