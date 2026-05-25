import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";
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

  const certificates = [
    {
      title: "Data Usability for Organizations",
      issuer: "IBM",
      date: "Abril 2026",
      link: "https://www.credly.com/badges/0cbddd24-6e9f-46d8-88c4-55a5fb526416/linked_in_profile",
    },
    {
      title: "Data Classification",
      issuer: "IBM",
      date: "Abril 2026",
      link: "https://www.credly.com/badges/a6c8ed20-41b4-429c-bcf5-617138092b65/linked_in_profile",
    },
    {
      title: t("certificates.meta"),
      issuer: "Meta",
      date: "Marzo 2026",
      end_date: "Marzo 2028",
      link: "https://www.credly.com/badges/578d302d-40a3-4b0c-aca6-e987f116157b/linked_in_profile",
    },
    {
      title: t("certificates.pearson"),
      issuer: "Pearson",
      date: "Marzo 2026",
      end_date: "Marzo 2031",
      link: "https://www.credly.com/badges/dca4ac3c-86bb-4a17-aacf-2ed85d6af1ee/linked_in_profile",
    },
    {
      title: "Microsoft Certified: Azure Data Fundamentals",
      issuer: "Microsoft",
      date: "Marzo 2026",
      link: "https://www.credly.com/badges/b85e2c8d-2f2e-42d5-aba2-f54a653c1e1f/linked_in_profile",
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "Marzo 2026",
      link: "https://www.credly.com/badges/4dcef478-e19d-4429-891c-bcaa39e3d870/linked_in_profile",
    },
    {
      title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
      issuer: "Microsoft",
      date: "Marzo 2026",
      link: "https://www.credly.com/badges/102dae06-4b28-4f7d-b2f6-4dcf00d846cb/linked_in_profile",
    },
    {
      title: "Data Fundamentals",
      issuer: "IBM",
      date: "Febrero 2026",
      link: "https://www.credly.com/badges/8e2b413c-8d33-4fe8-a30c-3f7064ce1bb3/linked_in_profile",
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "IBM",
      date: "Febrero 2026",
      link: "https://www.credly.com/badges/84a2de3d-3346-43ff-82ea-f57a8e1e449e/linked_in_profile",
    },
    {
      title: "Artificial Intelligence Fundamentals",
      issuer: "IBM",
      date: "Enero 2026",
      link: "https://www.credly.com/badges/134800c9-43cd-4d11-ae8d-d9c101fea15f/linked_in_profile",
    },
  ];

  return (
    <ScrollReveal >
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
            variants={animationPresets.itemSlideUp}
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
                    {cert.end_date && ` - ${cert.end_date}`}
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
    </ScrollReveal>
  );
};

export default Certificates;
