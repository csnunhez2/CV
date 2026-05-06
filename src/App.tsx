import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex flex-col">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

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
        <main className="flex-1 overflow-y-auto p-4 md:p-6 md:ml-64">
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
  );
}

export default App;