import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";
import ParallaxSection from "./ParallaxSection";
import { animationPresets, commonAnimations } from "../utils/animations";

const getIssuerColor = (issuer: string) => {
  switch (issuer.toLowerCase()) {
    case "microsoft":
      return "from-blue-500 to-blue-600";
    case "ibm":
      return "from-purple-500 to-purple-600";
    case "meta":
      return "from-pink-500 to-pink-600";
    case "pearson":
      return "from-amber-500 to-amber-600";
    default:
      return "from-gray-500 to-gray-600";
  }
};

const Certificates = () => {
  const { t } = useTranslation();

  type CertificateItem = {
    title: string;
    issuer: string;
    date: string;
    link: string;
  };

  const certificates = (t("certificates.items", {
    returnObjects: true,
    defaultValue: [],
  }) as CertificateItem[]).map((item) => ({
    title: item.title,
    issuer: item.issuer,
    date: item.date,
    link: item.link,
  }));

  return (
    <ScrollReveal >
      <ParallaxSection offset={40}>
        <motion.div
          variants={animationPresets.containerStagger}
          initial="hidden"
          animate="visible"
          className="card"
        >
      <motion.h2
        {...animationPresets.headingEnter}
        className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent gradient-animated bg-[length:200%_200%] flex items-center gap-3"
      >
        <Award size={32} /> {t("certificates.title")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificates.map((cert, i) => (
          <motion.a
            key={i}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            {...commonAnimations.card}
            className="group p-5 rounded-xl hover:shadow-lg dark:hover:shadow-blue-900/50 transition-all cursor-pointer border"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
            }}
          >
            <div className="flex items-start gap-3">
              <motion.div
                className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${getIssuerColor(
                  cert.issuer
                )} dark:opacity-80 flex items-center justify-center text-white shadow-md`}
                {...animationPresets.iconTilt}
              >
                <Award size={20} />
              </motion.div>

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-heading group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {cert.title}
                </h3>
                <div className="flex items-center justify-between mt-2 text-xs text-secondary flex-wrap gap-1">
                  <span className="font-medium text-main">{cert.issuer}</span>
                  <span className="text-tertiary">
                    {cert.date}
                  </span>
                </div>
              </div>

              <motion.div
                className="flex-shrink-0 text-secondary dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
              >
                <ExternalLink size={18} />
              </motion.div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
      </ParallaxSection>
    </ScrollReveal>
  );
};

export default Certificates;
