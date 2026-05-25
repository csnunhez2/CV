import { useTranslation } from "react-i18next";

const CVPrint = () => {
  const { t } = useTranslation();
  const experienceData = [
    {
      role: t("experience.fullstack.role"),
      company: t("experience.fullstack.company"),
      date: t("experience.fullstack.date"),
      description: t("experience.fullstack.description"),
      tags: ["Spring Boot", "Angular", "Microservicios", "PostgreSQL"],
    },
    {
      role: t("experience.tutor.role"),
      company: t("experience.tutor.company"),
      date: t("experience.tutor.date"),
      description: t("experience.tutor.description"),
      tags: ["Ontimize", "Scrum"],
    },
    {
      role: t("experience.rockbotic.role"),
      company: t("experience.rockbotic.company"),
      date: t("experience.rockbotic.date"),
      description: t("experience.rockbotic.description"),
      tags: ["Programación", "Robótica"],
    },
  ];

  const educationData = [
    {
      title: t("education.degree1.title"),
      place: t("education.degree1.place"),
      date: t("education.degree1.date"),
      specialization: t("education.degree1.specialization"),
    },
    {
      title: t("education.degree2.title"),
      place: t("education.degree2.place"),
      date: t("education.degree2.date"),
    },
    {
      title: t("education.degree3.title"),
      place: t("education.degree3.place"),
      date: t("education.degree3.date"),
    },
  ];

  const skillsData = [
    { category: t("skills.backend"), skills: ["Java", "Spring Boot", "Microservices", "REST APIs"] },
    { category: t("skills.database"), skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB"] },
    { category: t("skills.devops"), skills: ["Docker", "CI/CD", "Git", "Maven"] },
    { category: t("skills.testing"), skills: ["JUnit", "Mockito", "TDD", "Integration Testing"] },
    { category: t("skills.frontend"), skills: ["Angular", "React", "TypeScript", "Tailwind CSS"] },
  ];

  const certificatesData = [
    { title: t("certificates.azure1"), issuer: "Microsoft", date: "April 2026" },
    { title: t("certificates.azure2"), issuer: "Microsoft", date: "April 2026" },
    { title: t("certificates.ibm1"), issuer: "IBM", date: "February 2026" },
    { title: t("certificates.meta"), issuer: "Meta", date: "April 2026" },
    { title: t("certificates.pearson"), issuer: "Pearson", date: "April 2026" },
  ];

  const coursesData = [
    { title: t("courses.course1"), platform: "Udemy", date: "March 2026" },
    { title: t("courses.course2"), platform: "Udemy", date: "November 2025" },
    { title: t("courses.course3"), platform: "Udemy", date: "October 2025" },
    { title: t("courses.course4"), platform: "TrainingIT", date: "March 2025" },
    { title: t("courses.course5"), platform: "Udemy", date: "July 2024" },
    { title: t("courses.course6"), platform: "Campus Dual TIC", date: "November 2023" },
    { title: t("courses.course7"), platform: "Udemy", date: "June 2022" },
    { title: t("courses.course8"), platform: "Udemy", date: "May 2020" },
  ];

  const languagesData = [
    { name: t("languages.spanish"), level: t("languages.native") },
    { name: t("languages.galician"), level: t("languages.native") },
    { name: t("languages.english"), level: t("languages.toeic") },
  ];

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.name}>CÉSAR NUNHEZ</h1>
          <p style={styles.title}>Software Engineer</p>
        </div>
        <div style={styles.contact}>
          <p>Email: cesar.santiago.nunhez@gmail.com</p>
          <p>GitHub: github.com/csnunhez2</p>
          <p>LinkedIn: linkedin.com/in/csnunhez</p>
        </div>
      </div>

      {/* Professional Summary */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>{t('pdf.professionalSummary').toUpperCase()}</h2>
        <p style={styles.paragraph}>
          {t('pdf.summaryText')}
        </p>
      </div>

      {/* Core Skills */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>{t('pdf.technicalSkills').toUpperCase()}</h2>
        {skillsData.map((skillGroup, idx) => (
          <div key={idx} style={styles.skillGroup}>
            <p style={styles.skillCategory}><strong>{skillGroup.category}:</strong> {skillGroup.skills.join(", ")}</p>
          </div>
        ))}
      </div>

      {/* Professional Experience */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>{t('pdf.professionalExperience').toUpperCase()}</h2>
        {experienceData.map((exp, idx) => (
          <div key={idx} style={styles.experience}>
            <div style={styles.experienceHeader}>
              <h3 style={styles.jobTitle}>{exp.role}</h3>
              <p style={styles.date}>{exp.date}</p>
            </div>
            <p style={styles.company}>{exp.company}</p>
            <p style={styles.description}>{exp.description}</p>
            {idx < experienceData.length - 1 && <div style={styles.divider} />}
          </div>
        ))}
      </div>

      {/* Education */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>{t('pdf.educationSection').toUpperCase()}</h2>
        {educationData.map((edu, idx) => (
          <div key={idx} style={styles.education}>
            <div style={styles.educationHeader}>
              <h3 style={styles.degree}>{edu.title}</h3>
              <p style={styles.date}>{edu.date}</p>
            </div>
            <p style={styles.institution}>{edu.place}</p>
            {edu.specialization && <p style={styles.specialization}>{edu.specialization}</p>}
            {idx < educationData.length - 1 && <div style={styles.divider} />}
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>{t('pdf.certificationsSection').toUpperCase()}</h2>
        {certificatesData.map((cert, idx) => (
          <div key={idx} style={styles.certification}>
            <div style={styles.certHeader}>
              <p style={styles.certTitle}>{cert.title}</p>
              <p style={styles.date}>{cert.date}</p>
            </div>
            <p style={styles.certIssuer}>{cert.issuer}</p>
          </div>
        ))}
      </div>

      {/* Courses */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>{t('pdf.coursesSection').toUpperCase()}</h2>
        {coursesData.map((course, idx) => (
          <div key={idx} style={styles.course}>
            <div style={styles.courseHeader}>
              <p style={styles.courseTitle}>{course.title}</p>
              <p style={styles.date}>{course.date}</p>
            </div>
            <p style={styles.coursePlatform}>{course.platform}</p>
          </div>
        ))}
      </div>

      {/* Languages */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>{t('pdf.languagesSection').toUpperCase()}</h2>
        <div style={styles.languagesContainer}>
          {languagesData.map((lang, idx) => (
            <div key={idx} style={styles.language}>
              <p style={styles.languageName}>{lang.name} - <strong>{lang.level}</strong></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
    color: "#1a1a1a",
    fontSize: "10.5px",
    lineHeight: "1.65",
    padding: "8px 10px 2px 10px",
    maxWidth: "210mm",
    margin: "0 auto",
    backgroundColor: "#ffffff",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "2px solid #3b82f6",
    paddingBottom: "12px",
    marginBottom: "12px",
  },
  name: {
    fontSize: "21px",
    fontWeight: "bold",
    color: "#1e40af",
    margin: "0 0 4px 0",
  },
  title: {
    fontSize: "12px",
    color: "#6366f1",
    margin: "0",
    fontWeight: "500",
  },
  contact: {
    textAlign: "right",
    fontSize: "9px",
  },
  section: {
    marginBottom: "11px",
  },
  sectionTitle: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#1e40af",
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: "6px",
    marginBottom: "9px",
    textTransform: "uppercase",
  },
  paragraph: {
    margin: "0 0 10px 0",
    lineHeight: "1.65",
  },
  skillGroup: {
    marginBottom: "5px",
  },
  skillCategory: {
    margin: "0",
    fontSize: "10px",
  },
  experience: {
    marginBottom: "9px",
  },
  experienceHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "4px",
  },
  jobTitle: {
    fontSize: "11px",
    fontWeight: "bold",
    color: "#1e40af",
    margin: "0",
  },
  company: {
    fontSize: "10px",
    color: "#6366f1",
    fontWeight: "500",
    margin: "3px 0",
  },
  description: {
    fontSize: "10px",
    margin: "4px 0",
    lineHeight: "1.55",
  },
  date: {
    fontSize: "9px",
    color: "#666",
    whiteSpace: "nowrap",
    marginLeft: "5px",
  },
  divider: {
    height: "1px",
    backgroundColor: "#e5e7eb",
    margin: "6px 0",
  },
  education: {
    marginBottom: "9px",
  },
  educationHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "4px",
  },
  degree: {
    fontSize: "11px",
    fontWeight: "bold",
    color: "#1e40af",
    margin: "0",
  },
  institution: {
    fontSize: "10px",
    color: "#6366f1",
    fontWeight: "500",
    margin: "3px 0",
  },
  specialization: {
    fontSize: "9px",
    color: "#666",
    margin: "3px 0",
    fontStyle: "italic",
  },
  certification: {
    marginBottom: "5px",
  },
  certHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "2px",
  },
  certTitle: {
    fontSize: "10px",
    fontWeight: "500",
    color: "#1a1a1a",
    margin: "0",
  },
  certIssuer: {
    fontSize: "9px",
    color: "#666",
    margin: "0",
  },
  languagesContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "10px",
  },
  language: {
    backgroundColor: "#f0f4f8",
    padding: "8px 10px",
    borderRadius: "4px",
  },
  languageName: {
    fontSize: "10px",
    margin: "0",
  },
  course: {
    marginBottom: "5px",
  },
  courseHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "2px",
  },
  courseTitle: {
    fontSize: "10px",
    fontWeight: "500",
    color: "#1a1a1a",
    margin: "0",
  },
  coursePlatform: {
    fontSize: "9px",
    color: "#666",
    margin: "0",
  },
};

export default CVPrint;
