import { motion } from "framer-motion";
import { BookOpen, ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "./ScrollReveal";
import ParallaxSection from "./ParallaxSection";
import { animationPresets, commonAnimations } from "../utils/animations";

const Courses = () => {
  const { t } = useTranslation();

  type CourseItem = {
    title: string;
    platform: string;
    date: string;
  };

  const courses = (t("courses.items", {
    returnObjects: true,
    defaultValue: [],
  }) as CourseItem[]).map((item) => ({
    title: item.title,
    platform: item.platform,
    date: item.date,
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
        <BookOpen size={32} /> {t("courses.title")}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((course, i) => (
          <motion.a
            key={i}
            href={course.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
            {...commonAnimations.card}
            className="group p-5 rounded-xl backdrop-blur-lg hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:bg-opacity-80 cursor-pointer border"
            style={{
              backgroundColor: 'var(--card-bg)',
              borderColor: 'var(--card-border)',
            }}
          >
            <div className="flex items-start gap-3">
              <motion.div className="flex-shrink-0 mt-1" {...animationPresets.iconTilt}>
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white shadow-md">
                  <BookOpen size={20} />
                </div>
              </motion.div>

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-heading group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between mt-2 text-xs text-secondary">
                  <span className="font-medium text-orange-600 dark:text-orange-400">{course.platform}</span>
                  <span className="text-tertiary">{course.date}</span>
                </div>
              </div>

              {course.link && (
                <motion.div
                  className="flex-shrink-0 text-secondary dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  {...animationPresets.iconTilt}
                >
                  <ExternalLink size={18} />
                </motion.div>
              )}
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
      </ParallaxSection>
    </ScrollReveal>
  );
};

export default Courses;