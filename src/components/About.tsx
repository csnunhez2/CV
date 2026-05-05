import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const About = () => {
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
    "Soy ingeniero de software con más de 7 años de experiencia trabajando principalmente en backend con Java y Spring Boot, desarrollando APIs y evolucionando aplicaciones hacia arquitecturas de microservicios.",
    "A lo largo de mi carrera he participado en proyectos tanto internos como para clientes internacionales, lo que me ha permitido trabajar en entornos colaborativos, con metodologías ágiles y con un enfoque claro en la calidad del software, el testing y las buenas prácticas.",
    "En los últimos años también he asumido un rol más activo dentro de los equipos, apoyando a otros desarrolladores, revisando código y ayudando en la toma de decisiones técnicas, además de mi experiencia como tutor en bootcamps, donde he acompañado a perfiles junior en su crecimiento profesional.",
    "Me interesa especialmente seguir evolucionando hacia roles con mayor impacto en producto y arquitectura, donde pueda no solo desarrollar soluciones, sino también participar en su diseño, escalabilidad y mejora continua.",
    "Me considero una persona constante, con mentalidad analítica y orientada a equipo, que disfruta entendiendo los problemas en profundidad y buscando soluciones simples, mantenibles y de calidad.",
  ];

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
        className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        Sobre mí
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
              className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium hover:shadow-md transition-shadow cursor-default"
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
