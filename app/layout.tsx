import './globals.css';  // ou o caminho correto para o seu arquivo de estilos

import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import RadioPlayer from "./components/RadioPlayer";
import Footer from "./components/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR"> {/* A tag <html> com a linguagem definida */}
      <head>
        <title>Radio Habblive - Desenvolvimento</title>
        {/* Outras tags de head podem ir aqui */}
      </head>
      <body>
        {/* Navbar, Banner, e outros componentes de layout */}
        <RadioPlayer />
        <Navbar />
        <Banner />

        {/* Conteúdo principal */}
        <main>{children}</main>

        {/* Player de Rádio e Footer */}
    
        <Footer />
      </body>
    </html>
  );
}
