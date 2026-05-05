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
    <div className="h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 flex flex-col">
      <Header />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar current={current} setCurrent={setCurrent} />

        <main className="flex-1 relative overflow-hidden overflow-y-auto p-6">
          {/* Background blobs removed for testing */}
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