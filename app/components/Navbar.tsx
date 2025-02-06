'use client';
import { useState, useEffect, useRef } from "react";
import { FaHome, FaUsers, FaHotel, FaCogs, FaCaretDown } from "react-icons/fa";
import Link from 'next/link';

// Hook personalizado para detectar cliques fora de um elemento
function useOnClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  handler: (event: MouseEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
}

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Alteração no tipo de ref para div
  const loginModalRef = useRef<HTMLDivElement | null>(null);
  const registerModalRef = useRef<HTMLDivElement | null>(null);

  // Indica que estamos no cliente (necessário para componentes Next.js com SSR)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Fecha os modais quando o usuário clica fora
  useOnClickOutside(loginModalRef, () => {
    if (isLoginOpen) setIsLoginOpen(false);
  });
  useOnClickOutside(registerModalRef, () => {
    if (isRegisterOpen) setIsRegisterOpen(false);
  });

  const navigation = [
    { href: "/", label: "Página Inicial", icon: <FaHome /> },
    {
      href: "/",
      label: "Habblive",
      icon: <FaUsers />,
      submenu: [
        { href: "/habblive/users", label: "Usuários" },
        { href: "/habblive/settings", label: "Configurações" },
      ],
    },
    {
      label: "Habblive Hotel",
      icon: <FaHotel />,
      submenu: [
        { href: "/hotel/rooms", label: "Quartos" },
        { href: "/hotel/staff", label: "Equipe" },
        { href: "/hotel/events", label: "Eventos" },
      ],
    },
    {
      href: "/",
      label: "APIs",
      icon: <FaCogs />,
      submenu: [
        { href: "/apis/docs", label: "Documentação" },
        { href: "/apis/status", label: "Status" },
      ],
    },
  ];

  if (!isClient) return null;

  return (
    <nav className="bg-[#0d2b43] text-white p-4 flex justify-between items-center relative shadow-lg">
      <div className="flex space-x-4 ml-[100px]">
        {navigation.map((item) => (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => item.submenu && setOpenDropdown(item.label)}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            {item.submenu ? (
              <>
                <button className="flex items-center space-x-2 hover:text-gray-300 transition-colors duration-200">
                  {item.icon}
                  <span>{item.label}</span>
                  <FaCaretDown className="ml-2 transition-transform duration-200" />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute z-10 bg-[#1b4b87] text-white rounded-md shadow-xl mt-2 w-48 transition-all duration-300">
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
              <Link
                href={item.href}
                className="flex items-center space-x-2 hover:text-gray-300 transition-all duration-200"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center space-x-4 mr-[77px]">
        <button
          onClick={() => setIsLoginOpen(true)}
          className="bg-[#5C6772] px-4 py-2 rounded-md hover:bg-[#7A8692] transition-transform duration-300 transform hover:scale-105"
        >
          Logar
        </button>
        <span className="text-gray-400">OU</span>
        <button
          onClick={() => setIsRegisterOpen(true)}
          className="bg-[#6171DD] px-4 py-2 rounded-md hover:bg-[#4A58C8] transition-transform duration-300 transform hover:scale-105"
        >
          Registre-se
        </button>
      </div>

      {/* Modal de Login */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div ref={loginModalRef} className="relative bg-white p-6 rounded-lg w-96 shadow-lg">
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              X
            </button>
            <h2 className="text-2xl font-semibold mb-4">Login</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 mt-1 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-2 mt-1 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0d2b43] text-white py-2 rounded-md hover:bg-[#1b4b87] transition duration-300"
              >
                Entrar
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modal de Registro */}
      {isRegisterOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div ref={registerModalRef} className="relative bg-white p-6 rounded-lg w-96 shadow-lg">
            <button
              onClick={() => setIsRegisterOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              X
            </button>
            <h2 className="text-2xl font-semibold mb-4">Registre-se</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 mt-1 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 mt-1 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Senha
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full p-2 mt-1 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#0d2b43] text-white py-2 rounded-md hover:bg-[#1b4b87] transition duration-300"
              >
                Registrar
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
