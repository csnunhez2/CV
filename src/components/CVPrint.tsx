import { useTranslation } from "react-i18next";

const CVPrint = () => {
  const { t, i18n } = useTranslation();
  const shouldBreakBeforeSkills = i18n.language.startsWith("en");

  type ExperienceItem = {
    role: string;
    company: string;
    date: string;
    description?: string;
    tags?: string;
  };

  type EducationItem = {
    title: string;
    place: string;
    date: string;
    specialization?: string;
  };

  type CourseItem = {
    title: string;
    platform: string;
    date: string;
  };

  type CertificateItem = {
    title: string;
    issuer: string;
    date: string;
  };

  type LanguageItem = {
    name: string;
    level: string;
  };

  const aboutParagraphs = [t("about.p1"), t("about.p2"), t("about.p3"), t("about.p4"), t("about.p5"), t("about.p6")];

  const experienceData = (t("experience.items", {
    returnObjects: true,
    defaultValue: [],
  }) as ExperienceItem[]).map((item) => ({
    role: item.role,
    company: item.company,
    date: item.date,
    description: item.description ?? "",
    tags: item.tags
      ? item.tags.split(",").map((tag) => tag.trim()).filter(Boolean)
      : [],
  }));

  const educationData = (t("education.items", {
    returnObjects: true,
    defaultValue: [],
  }) as EducationItem[]).map((item) => ({
    title: item.title,
    place: item.place,
    date: item.date,
    specialization: item.specialization ?? "",
  }));

  const skillsData = [
    { category: t("skills.backend"), skills: ["Java", "Spring Boot", "Microservices", "REST APIs"] },
    { category: t("skills.database"), skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB"] },
    { category: t("skills.devops"), skills: ["Docker", "CI/CD", "Git", "Maven"] },
    { category: t("skills.testing"), skills: ["JUnit", "Mockito", "TDD", "Integration Testing"] },
    { category: t("skills.frontend"), skills: ["Angular", "React", "TypeScript"] },
  ];

  const certificatesData = (t("certificates.items", {
    returnObjects: true,
    defaultValue: [],
  }) as CertificateItem[]).map((item) => ({
    title: item.title,
    issuer: item.issuer,
    date: item.date,
  }));

  const coursesData = (t("courses.items", {
    returnObjects: true,
    defaultValue: [],
  }) as CourseItem[]).map((item) => ({
    title: item.title,
    platform: item.platform,
    date: item.date,
  }));

  const languagesData = (t("languages.items", {
    returnObjects: true,
    defaultValue: [],
  }) as LanguageItem[]).map((item) => ({
    name: item.name,
    level: item.level,
  }));

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <div>
          <h1 style={styles.name}>César Miguel Santiago Núñez</h1>
          <p style={styles.title}>{t("header.softwareEngineer")}</p>
        </div>
        <div style={styles.contact}>
          <p>
            Email: <a href="mailto:cesar.santiago.nunhez@gmail.com" style={styles.link}>cesar.santiago.nunhez@gmail.com</a>
          </p>
          <p>
            GitHub: <a href="https://github.com/csnunhez2" target="_blank" rel="noopener noreferrer" style={styles.link}>github.com/csnunhez2</a>
          </p>
          <p>
            LinkedIn: <a href="https://linkedin.com/in/csnunhez" target="_blank" rel="noopener noreferrer" style={styles.link}>linkedin.com/in/csnunhez</a>
          </p>
        </div>
      </div>

      {/* About */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>{t("about.title").toUpperCase()}</h2>
        {aboutParagraphs.map((paragraph, idx) => (
          <p key={idx} style={styles.paragraph}>{paragraph}</p>
        ))}
        <p style={styles.paragraph}><strong>{t("about.tags")}</strong></p>
      </div>

      {/* Experience */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>{t("experience.title").toUpperCase()}</h2>
        {experienceData.map((exp, idx) => (
          <div key={idx} style={styles.experience}>
            <div style={styles.experienceHeader}>
              <h3 style={styles.jobTitle}>{exp.role}</h3>
              <p style={styles.date}>{exp.date}</p>
            </div>
            <p style={styles.company}>{exp.company}</p>
            {exp.description && <p style={styles.description}>{exp.description}</p>}
            {exp.tags.length > 0 && (
              <p style={styles.description}><strong>Tags:</strong> {exp.tags.join(", ")}</p>
            )}
            {idx < experienceData.length - 1 && <div style={styles.divider} />}
          </div>
        ))}
      </div>

      {/* Education */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>{t("education.title").toUpperCase()}</h2>
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

      {/* Skills */}
      <div
        style={{
          ...styles.section,
          breakBefore: shouldBreakBeforeSkills ? "page" : "auto",
          pageBreakBefore: shouldBreakBeforeSkills ? "always" : "auto",
        }}
      >
        <h2 style={styles.sectionTitle}>{t("skills.title").toUpperCase()}</h2>
        {skillsData.map((skillGroup, idx) => (
          <div key={idx} style={styles.skillGroup}>
            <p style={styles.skillCategory}><strong>{skillGroup.category}:</strong> {skillGroup.skills.join(", ")}</p>
          </div>
        ))}
      </div>

      {/* Courses */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>{t("courses.title").toUpperCase()}</h2>
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

      {/* Certifications */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>{t("certificates.title").toUpperCase()}</h2>
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

      {/* Languages */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>{t("languages.title").toUpperCase()}</h2>
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
  link: {
    color: "#2563eb",
    textDecoration: "underline",
  },
  section: {
    marginBottom: "11px",
    pageBreakInside: "avoid",
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
