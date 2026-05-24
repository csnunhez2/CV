import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";
import { useViewportScroll, useTransform } from "framer-motion";

const About = () => {
  const { t } = useTranslation();
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 500], [0, 50]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  const paragraphs = [
    t("about.p1"),
    t("about.p2"),
    t("about.p3"),
    t("about.p4"),
    t("about.p5"),
  ];

  return (
    <ScrollReveal >
      <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{ y }}
      className="card"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent gradient-animated bg-[length:200%_200%]"
      >
        {t("about.title")}
      </motion.h2>

      <div className="space-y-6">
        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={paragraphVariants}
            className="text-gray-700 leading-relaxed text-lg hover:text-gray-900 transition-colors"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="mt-10 pt-8 border-t border-blue-200 flex gap-4 flex-wrap"
      >
        {["Java", "Spring Boot", "Microservicios", "Backend", "Testing"].map(
          (tag, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05 }}
              className="skill-pill"
            >
              {tag}
            </motion.span>
          )
        )}
      </motion.div>
    </motion.div>
    </ScrollReveal>
  );
};

export default About;
