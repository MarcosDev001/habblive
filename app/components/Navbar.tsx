"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FaHome, FaUsers, FaHotel, FaCogs, FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // Para verificar se está no cliente

  const loginModalRef = useRef<HTMLDivElement | null>(null);
  const registerModalRef = useRef<HTMLDivElement | null>(null);

  const navigation = [
    { href: "/", label: "Página Inicial", icon: <FaHome /> },
    { href: "/", label: "Habblive", icon: <FaUsers />, submenu: [
      { href: "/habblive/users", label: "Usuários" },
      { href: "/habblive/settings", label: "Configurações" },
    ] },
    { label: "Habblive Hotel", icon: <FaHotel />, submenu: [
      { href: "/hotel/rooms", label: "Quartos" },
      { href: "/hotel/staff", label: "Equipe" },
      { href: "/hotel/events", label: "Eventos" },
    ] },
    { href: "/", label: "APIs", icon: <FaCogs />, submenu: [
      { href: "/apis/docs", label: "Documentação" },
      { href: "/apis/status", label: "Status" },
    ] },
  ];

  useEffect(() => {
    setIsClient(true); // Atualiza o estado para indicar que estamos no cliente
  }, []);

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);
  const openRegisterModal = () => setIsRegisterOpen(true);
  const closeRegisterModal = () => setIsRegisterOpen(false);

  const handleClickOutside = (e: MouseEvent) => {
    if (loginModalRef.current && !loginModalRef.current.contains(e.target as Node)) {
      closeLoginModal();
    }
    if (registerModalRef.current && !registerModalRef.current.contains(e.target as Node)) {
      closeRegisterModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Só renderiza o Navbar no cliente
  if (!isClient) return null;

  return (
    <nav className="bg-[#0d2b43] text-white p-4 flex justify-between items-center relative shadow-lg">
      <div className="flex space-x-4">
        {navigation.map((item) => (
          <div
            key={item.label}
            className="relative gap-[27px] ml-[100px]"
            onMouseEnter={() => item.submenu && setOpenDropdown(item.label)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {item.submenu ? (
              <>
                <button className="flex items-center space-x-2 hover:text-gray-300 transition-all duration-200">
                  {item.icon}
                  <span>{item.label}</span>
                  <FaCaretDown className="ml-2 transition-transform duration-200" />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute z-10 bg-[#1b4b87] text-white rounded-md shadow-xl mt-2 w-48 transform transition-all duration-300">
                    {item.submenu.map((subItem) => (
                      <Link key={subItem.label} href={subItem.href}>
                        <div className="px-4 py-2 hover:bg-[#285894] cursor-pointer transition-all duration-200">
                          {subItem.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link href={item.href} className="flex items-center space-x-2 hover:text-gray-300 transition-all duration-200">
                {item.icon}
                <span>{item.label}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-4 ml-auto mr-[77px]">
        <button onClick={openLoginModal} className="bg-[#5C6772] px-4 py-2 rounded-md hover:bg-[#7A8692] transition-all duration-300 transform hover:scale-105">
          <span className="text-white">Logar</span>
        </button>
        <span className="text-gray-400">OU</span>
        <button onClick={openRegisterModal} className="bg-[#6171DD] px-4 py-2 rounded-md hover:bg-[#4A58C8] transition-all duration-300 transform hover:scale-105">
          <span className="text-white">Registre-se</span>
        </button>
      </div>

      {/* Modal de Login */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div ref={loginModalRef} className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 mt-1 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" required />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                <input type="password" id="password" name="password" className="w-full p-2 mt-1 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" required />
              </div>
              <button type="submit" className="w-full bg-[#0d2b43] text-white py-2 rounded-md hover:bg-[#1b4b87] transition duration-300">Entrar</button>
            </form>
            <button onClick={closeLoginModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">X</button>
          </div>
        </div>
      )}

      {/* Modal de Registro */}
      {isRegisterOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div ref={registerModalRef} className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Registre-se</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nome</label>
                <input type="text" id="name" name="name" className="w-full p-2 mt-1 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 mt-1 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" required />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
                <input type="password" id="password" name="password" className="w-full p-2 mt-1 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200" required />
              </div>
              <button type="submit" className="w-full bg-[#0d2b43] text-white py-2 rounded-md hover:bg-[#1b4b87] transition duration-300">Registrar</button>
            </form>
            <button onClick={closeRegisterModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">X</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
