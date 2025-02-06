import './globals.css';  
import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import RadioPlayer from "./components/RadioPlayer";
import Footer from "./components/Footer";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <title>Radio Habblive - Desenvolvimento</title>
      </head>
      <body>
        <RadioPlayer />
        <Navbar />
        <Banner />
        
      

        <main>{children}</main>
        
        <Footer />
      </body>
    </html>
  );
}
