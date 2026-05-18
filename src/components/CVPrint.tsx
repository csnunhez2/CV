import { useTranslation } from "react-i18next";

const CVPrint = () => {
  const { t } = useTranslation();
  const experienceData = [
    {
      role: "Full Stack Developer",
      company: "Imatia",
      date: "June 2018 - Present",
      description: "Desarrollé aplicaciones con Spring Boot, evolucionando arquitecturas monolíticas a microservicios. Experiencia con múltiples bases de datos (PostgreSQL, MySQL, MS SQL Server, MongoDB) en entorno Scrum/Agile.",
      tags: ["Spring Boot", "Angular", "Microservicios", "PostgreSQL"],
    },
    {
      role: "Bootcamp Tutor",
      company: "Campus Dual TIC",
      date: "March 2023 - Present",
      description: "Tutor en bootcamp de desarrollo con experiencia en framework Ontimize y metodología Scrum.",
      tags: ["Ontimize", "Scrum"],
    },
    {
      role: "Tutor",
      company: "Rockbotic",
      date: "January 2018 - May 2018",
      description: "Enseñanza de programación, robótica y diseño 3D a estudiantes de primaria.",
      tags: ["Programación", "Robótica"],
    },
  ];

  const educationData = [
    {
      title: "Grado en Ingeniería Informática",
      place: "Universidade de Vigo",
      date: "September 2012 - July 2017",
      specialization: "Software Engineering, Information Technologies",
    },
    {
      title: "Técnico Superior en Desarrollo de Aplicaciones Informáticas",
      place: "I.E.S San Clemente",
      date: "September 2010 - June 2012",
    },
    {
      title: "Técnico en Explotación de Sistemas Informáticos",
      place: "I.E.S Maximino Romero de Lema",
      date: "September 2007 - June 2009",
    },
  ];

  const skillsData = [
    { category: "Backend", skills: ["Java", "Spring Boot", "Microservicios", "REST APIs"] },
    { category: "Bases de Datos", skills: ["SQL", "PostgreSQL", "MySQL", "MongoDB"] },
    { category: "DevOps & Tools", skills: ["Docker", "CI/CD", "Git", "Maven"] },
    { category: "Testing", skills: ["JUnit", "Mockito", "TDD", "Integration Testing"] },
    { category: "Frontend", skills: ["Angular", "React", "TypeScript", "Tailwind CSS"] },
  ];

  const certificatesData = [
    { title: "Azure Data Fundamentals", issuer: "Microsoft", date: "April 2026" },
    { title: "Azure AI Fundamentals", issuer: "Microsoft", date: "April 2026" },
    { title: "Data Usability", issuer: "IBM", date: "February 2026" },
    { title: "Certified Digital Marketing Associate", issuer: "Meta", date: "April 2026" },
    { title: "IT Specialist - Python", issuer: "Pearson", date: "April 2026" },
  ];

  const coursesData = [
    { title: "Curso Completo de Prompt Engineering para IA Generativa A-Z", platform: "Udemy", date: "Marzo 2026" },
    { title: "Clean Architecture for Beginners: A Practical Guide", platform: "Udemy", date: "Noviembre 2025" },
    { title: "Clean Code", platform: "Udemy", date: "Octubre 2025" },
    { title: "ChatGPT para profesionales: aprovecha la IA generativa en el trabajo", platform: "TrainingIT", date: "Marzo 2025" },
    { title: "Master Redux from scratch with Redux core, Redux-toolkit, react-redux library", platform: "Udemy", date: "Julio 2024" },
    { title: "Bootcamp Product Owner", platform: "Campus Dual TIC", date: "Noviembre 2023" },
    { title: "Angular - The Complete Guide (2022 Edition)", platform: "Udemy", date: "Junio 2022" },
    { title: "Testing Spring Boot: Beginner to Guru", platform: "Udemy", date: "Mayo 2020" },
  ];

  const languagesData = [
    { name: "Español", level: "Native" },
    { name: "Gallego", level: "Native" },
    { name: "Inglés", level: "TOEIC B1" },
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
          Software engineer with 7+ years of experience specializing in backend development using Java and Spring Boot. Expertise in microservices architecture, REST APIs, and modern software development practices. Proven track record of delivering high-quality solutions in collaborative, agile environments with strong emphasis on testing and best practices.
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
        <h2 style={styles.sectionTitle}>EDUCATION</h2>
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
        <h2 style={styles.sectionTitle}>CERTIFICATIONS</h2>
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
        <h2 style={styles.sectionTitle}>PROFESSIONAL DEVELOPMENT COURSES</h2>
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
        <h2 style={styles.sectionTitle}>LANGUAGES</h2>
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
    fontSize: "11px",
    lineHeight: "1.5",
    padding: "20px",
    maxWidth: "210mm",
    margin: "0 auto",
    backgroundColor: "#ffffff",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom: "3px solid #3b82f6",
    paddingBottom: "15px",
    marginBottom: "15px",
  },
  name: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#1e40af",
    margin: "0 0 5px 0",
  },
  title: {
    fontSize: "14px",
    color: "#6366f1",
    margin: "0",
    fontWeight: "500",
  },
  contact: {
    textAlign: "right",
    fontSize: "10px",
  },
  section: {
    marginBottom: "15px",
  },
  sectionTitle: {
    fontSize: "13px",
    fontWeight: "bold",
    color: "#1e40af",
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: "8px",
    marginBottom: "10px",
    textTransform: "uppercase",
  },
  paragraph: {
    margin: "0 0 10px 0",
    lineHeight: "1.6",
  },
  skillGroup: {
    marginBottom: "5px",
  },
  skillCategory: {
    margin: "0",
    fontSize: "11px",
  },
  experience: {
    marginBottom: "10px",
  },
  experienceHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "3px",
  },
  jobTitle: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#1e40af",
    margin: "0",
  },
  company: {
    fontSize: "11px",
    color: "#6366f1",
    fontWeight: "500",
    margin: "3px 0",
  },
  description: {
    fontSize: "10px",
    margin: "3px 0",
    lineHeight: "1.5",
  },
  date: {
    fontSize: "10px",
    color: "#666",
    whiteSpace: "nowrap",
    marginLeft: "10px",
  },
  divider: {
    height: "1px",
    backgroundColor: "#e5e7eb",
    margin: "8px 0",
  },
  education: {
    marginBottom: "10px",
  },
  educationHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "3px",
  },
  degree: {
    fontSize: "12px",
    fontWeight: "bold",
    color: "#1e40af",
    margin: "0",
  },
  institution: {
    fontSize: "11px",
    color: "#6366f1",
    fontWeight: "500",
    margin: "3px 0",
  },
  specialization: {
    fontSize: "10px",
    color: "#666",
    margin: "2px 0",
    fontStyle: "italic",
  },
  certification: {
    marginBottom: "6px",
  },
  certHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "2px",
  },
  certTitle: {
    fontSize: "11px",
    fontWeight: "500",
    color: "#1a1a1a",
    margin: "0",
  },
  certIssuer: {
    fontSize: "10px",
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
    padding: "8px 12px",
    borderRadius: "4px",
  },
  languageName: {
    fontSize: "11px",
    margin: "0",
  },
  course: {
    marginBottom: "6px",
  },
  courseHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: "2px",
  },
  courseTitle: {
    fontSize: "11px",
    fontWeight: "500",
    color: "#1a1a1a",
    margin: "0",
  },
  coursePlatform: {
    fontSize: "10px",
    color: "#666",
    margin: "0",
  },
};

export default CVPrint;
