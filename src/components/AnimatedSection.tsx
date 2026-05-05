import { motion } from "framer-motion";

const AnimatedSection = ({ children, id }: any) => {
  return (
    <motion.section
      id={id}
      className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;