import Card from "./components/Card";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-200 to-blue-500">
      <header className="flex justify-between items-center p-4 bg-blue-500 shadow-md">
        <div className="flex items-center">
          <h1 className="text-white text-xl font-semibold">
            Prueba Técnica Sngular
          </h1>
        </div>
        <div></div>
      </header>
      <main className="flex flex-1 items-center justify-center container mx-auto my-auto px-4 py-8 max-w-7xl">
        <Card />
      </main>
      <footer className="flex justify-between items-center p-4 bg-blue-600 shadow-md">
        <div className="text-white">
          © 2025 Antonio Amaya. All rights reserved
        </div>
        <div className="flex space-x-4 text-white">
          <a
            href="https://github.com/stewiemayer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
            aria-label="GitHub"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="w-8 h-8 filter invert"
            />
          </a>
          <a
            href="https://linkedin.com/in/antonioamayastc"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
            aria-label="LinkedIn"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-8 h-8"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
