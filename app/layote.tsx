import './globals.css';  
import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import RadioPlayer from "./components/RadioPlayer";
import Footer from "./components/Footer";
import ContentSection from "./components/ContentSection";

export const metadata = {
    title: "Radio Habblive - Desenvolvimento",
    description: "O melhor conteúdo da Habblive Radio.",
  };
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="pt-BR">
        <body>
          <RadioPlayer />
          <Navbar />
          <Banner />
          <main>{children}</main>
          <ContentSection />
          <Footer />
        </body>
      </html>
    );
  }