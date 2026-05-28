import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import CVPrint from "./components/CVPrint";
import FAB from "./components/FAB";
import AnimatedBackground from "./components/AnimatedBackground";
import ConnectingLines from "./components/ConnectingLines";
import { useTheme } from "./contexts/ThemeContext";

import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Courses from "./components/Courses";
import Certificates from "./components/Certificates";
import Languages from "./components/Languages";

function App() {
  const [current, setCurrent] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  const renderContent = () => {
    switch (current) {
      case "experience":
        return <Experience />;
      case "education":
        return <Education />;
      case "skills":
        return <Skills />;
      case "courses":
        return <Courses />;
      case "certificates":
        return <Certificates />;
      case "languages":
        return <Languages />;
      default:
        return <About />;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col relative overflow-hidden transition-colors duration-300 ${theme === 'dark' ? 'bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50'}`}>
      {/* Animated blobs and shapes background */}
      <AnimatedBackground />

      {/* Connecting lines between blobs */}
      <ConnectingLines />

      {/* Animated background */}
      <motion.div
        className={`fixed inset-0 z-0 opacity-60 pointer-events-none ${theme === 'dark' ? 'bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950' : 'bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50'}`}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      {/* Hidden CVPrint for PDF generation */}
      <div id="cv-print" style={{ display: "none" }}>
        <CVPrint />
      </div>

      {/* Container for sidebar and main content, positioned below header */}
      <div className="flex-1 flex" style={{ marginTop: "76px" }}>
        {/* Desktop sidebar - fixed on the left */}
        <div className="hidden md:block fixed left-0 top-[76px] w-64 h-[calc(100vh-76px)] overflow-y-auto z-40">
          <Sidebar current={current} setCurrent={setCurrent} />
        </div>

        {/* Mobile sidebar overlay */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-[76px] bg-black/40 z-30"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Mobile sidebar drawer */}
        <motion.div
          animate={{ x: mobileMenuOpen ? 0 : -256 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="md:hidden fixed w-64 h-[calc(100vh-76px)] top-[76px] left-0 z-50"
        >
          <Sidebar current={current} setCurrent={setCurrent} onItemClick={() => setMobileMenuOpen(false)} />
        </motion.div>

        {/* Main content - pushed right on desktop to account for sidebar */}
        <main id="cv-content" className="flex-1 overflow-y-auto p-4 md:p-6 md:ml-64 pb-20 md:pb-8">
          <div className="relative z-10 max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>

      </div>

      {/* Floating Action Button */}
      <FAB />
    </div>
  );
}

export default App;