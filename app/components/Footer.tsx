import React from "react";

const Footer = () => {
    return (
        <footer className="mt-auto bg-gradient-to-r from-[#0c2a7a] to-[#1446b0] text-white text-center p-6">
            <div className="max-w-7xl mx-auto">
                {/* Primeira seção: logo/título e navegação */}
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-blue-500 pb-4">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold">Rádio Habblive</h2>
                    </div>
                    <nav className="flex flex-wrap justify-center gap-6">
                        <a href="#" className="hover:underline transition-colors duration-200">
                            Início
                        </a>
                        <a href="#" className="hover:underline transition-colors duration-200">
                            Equipe
                        </a>
                        <a href="#" className="hover:underline transition-colors duration-200">
                            História
                        </a>
                        <a href="#" className="hover:underline transition-colors duration-200">
                            Habblive Beta
                        </a>
                        <a href="#" className="hover:underline transition-colors duration-200">
                            Valores
                        </a>
                        <a href="#" className="hover:underline transition-colors duration-200">
                            Recordes
                        </a>
                    </nav>
                </div>

                {/* Segunda seção: informações e créditos */}
                <div className="mt-4 text-center text-sm">
                    <p>&copy; 2024 Rádio Habblive &bull; Todos os direitos reservados.</p>
                    <p className="mt-2 text-xs max-w-lg mx-auto">
                        Este fã site não pertence a, está aprovado por ou tem vínculos com Sulake Company Oy. O fã site tem a aprovação do Habblive Hotel.
                    </p>
                    <p className="mt-2 text-xs">
                        Desenvolvido por <strong>Marcos(Indio)</strong>
                    </p>
                </div>
                
                {/* V1K25 Label */}
                <p className="text-xs mt-4">V1K25</p>
            </div>
        </footer>
    );
};

export default Footer;
