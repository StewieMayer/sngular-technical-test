import type { PropsWithChildren } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen bg-radial from-blue-100 to-blue-500">
      <Header />
      <main className="flex flex-1 items-center justify-center container mx-auto my-auto px-4 py-8 max-w-7xl">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
