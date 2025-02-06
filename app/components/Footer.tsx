const Footer = () => {
    return (
      <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Primeira seção: logo/título e navegação */}
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-blue-500 pb-4">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">Rádio Habblive</h2>
            </div>
            <nav className="flex flex-wrap justify-center gap-6">
              <a href="#" className="hover:underline transition-colors duration-200">Início</a>
              <a href="#" className="hover:underline transition-colors duration-200">Equipe</a>
              <a href="#" className="hover:underline transition-colors duration-200">História</a>
              <a href="#" className="hover:underline transition-colors duration-200">Habblet Imager</a>
              <a href="#" className="hover:underline transition-colors duration-200">Valores</a>
              <a href="#" className="hover:underline transition-colors duration-200">Recordes</a>
            </nav>
          </div>
  
          {/* Segunda seção: informações e créditos */}
          <div className="mt-4 text-center text-sm">
            <p>
              Este fã site não pertence, não está aprovado por, nem possui vínculos com a Sulake Company Oy. No entanto, o fã site conta com a aprovação do Habblive Hotel.
            </p>
            <p className="mt-2">
              ©️ Rádio Habblive | 2025 • Todos os direitos reservados à Rádio Habblive.
            </p>
            <p className="mt-2">
              Desenvolvido por MarcosBoni (Indio)
            </p>
            <p className="mt-2 text-xs">
              V1K25
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  