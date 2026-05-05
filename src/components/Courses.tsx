import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const courses = [
  {
    title: "Curso Completo de Prompt Engineering para IA Generativa A-Z",
    platform: "Udemy",
    date: "Marzo 2026",
    link: "https://www.udemy.com/certificate/UC-226caf29-4bc3-4edc-a760-ecbf7f15b344/",
  },
  {
    title: "Clean Architecture for Beginners: A Practical Guide",
    platform: "Udemy",
    date: "Noviembre 2025",
    link: "https://www.udemy.com/certificate/UC-ecb68819-17a7-48b3-b5d2-cfc05565c10d/",
  },
  {
    title: "Clean Code",
    platform: "Udemy",
    date: "Octubre 2025",
    link: "https://www.udemy.com/certificate/UC-78419787-272d-44ae-858d-321c88aee857/",
  },
  {
    title: "ChatGPT para profesionales: aprovecha la IA generativa en el trabajo",
    platform: "TrainingIT",
    date: "Marzo 2025",
    link: "https://cursos.trainingit.es/mod/customcert/verify_certificate.php?code=fvBZWKsTCf",
  },
  {
    title: "Master Redux from scratch with Redux core, Redux-toolkit, react-redux library",
    platform: "Udemy",
    date: "Julio 2024",
    link: "https://udemy.com/certificate/UC-b051741a-84e6-4c75-bd2b-24fa4cc2d1cc/",
  },
  {
    title: "Bootcamp Product Owner",
    platform: "Campus Dual TIC",
    date: "Noviembre 2023",
  },
  {
    title: "Angular - The Complete Guide (2022 Edition)",
    platform: "Udemy",
    date: "Junio 2022",
    link: "https://www.udemy.com/certificate/UC-c08c23e1-01b4-47e6-b4f0-60beb8652401/",
  },
  {
    title: "Testing Spring Boot: Beginner to Guru",
    platform: "Udemy",
    date: "Mayo 2020",
    link: "https://www.udemy.com/certificate/UC-e5425079-5301-47e8-b3f4-23d56e4dcc79/",
  },
];

const Courses = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <ScrollReveal >
      <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-3"
      >
        <BookOpen size={32} /> Cursos
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course, i) => (
          <motion.a
            key={i}
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ y: -4, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
            className="group p-5 border border-gray-200 rounded-xl bg-white hover:border-blue-300 transition-all cursor-pointer"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white shadow-md">
                  <BookOpen size={20} />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                  <span className="font-medium text-orange-600">{course.platform}</span>
                  <span>{course.date}</span>
                </div>
              </div>

              {course.link && (
                <motion.div
                  className="flex-shrink-0 text-gray-400 group-hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.2 }}
                >
                  <ExternalLink size={18} />
                </motion.div>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
    </ScrollReveal>
  );
};

export default Courses;