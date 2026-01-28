import React from "react";
import { MdOutlineEmail, MdPhone, MdLocationOn, MdLanguage } from "react-icons/md";
import { FaLink, FaCalendar, FaBook, FaMusic } from "react-icons/fa";
import { PiVolleyballLight } from "react-icons/pi";
import img from "../assets/img.jpg";

const CV = React.forwardRef((props, ref) => {
  // ==================== EDITABLE DATA ====================
  
  // Personal Information
  const personalInfo = {
    name: "HEM SOTHEARO",
    jobTitle: "WEB DEVELOPER INTERN",
    email: "sothearohem@gmail.com",
    phone: "+855 92 20 23 93",
    address: "#884, st113, Ou Baek K'am, Sen Sok, Phnom Penh",
    website: "https://hem-sotheearo-portfolio-react-js-wi.vercel.app/",
    imgSrc: img
  };

  // Professional Summary
  const professionalSummary = "I am a third-year Computer Science student who likes building websites and web applications. I have experience using ReactJS for frontend and PHP Laravel for backend. I can create simple APIs, connect database, and build responsive web pages. I want to improve my skills and gain real working experience as a web developer intern. I am a quick learner, hardworking, and a team player who is eager to contribute to the success of the organization.";

  // Technical Skills
  const technicalSkills = [
    "HTML/CSS/JavaScript",
    "React (Basic)",
    "Tailwind CSS",
    "PHP/Laravel (Basic)",
    "SQL/Database",
    "Git/GitHub",
    "C#/.NET",
    "CCNA Networking"
  ];

  // Additional Technical Skills (displayed as text)
  const additionalTechSkills = "Chrome DevTools, Java, C/C++, Software Troubleshooting, Responsive Web Design";

  // Soft Skills
  const softSkills = [
    "Communication",
    "Teamwork",
    "Flexibility",
    "Open-minded",
    "Problem Solving",
    "Time Management"
  ];

  // Education
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Royal University of Phnom Penh, Phnom Penh, Cambodia",
      period: "Feb 2024 – Present"
    },
    {
      degree: "English IEAP Program",
      institution: "Paññāsāstra University of Cambodia, Phnom Penh, Cambodia",
      period: "Feb 2023 – Sep 2024"
    },
    {
      degree: "High School Diploma",
      institution: "Pheam Cheang High School,Thbaung Kmum, Cambodia",
      period: "2020 – 2022"
    }
  ];

  // Languages
  const languages = [
    { name: "Khmer", level: "Native" },
    { name: "English", level: "Advanced" }
  ];

  // Projects
  const projects = [
    {
      name: "Portfolio Website (ReactJS)",
      link: "https://hem-sotheearo-portfolio-react-js-wi.vercel.app/",
      techStack: "ReactJS + Tailwind CSS",
      description: [
        "A fully responsive personal portfolio website",
        "Showcasing my work and skills",
        "Built with modern web technologies including React and Tailwind CSS"
      ]
    },
    {
      name: "E-Commerce Project Front-End",
      link: "https://e-commerce-project-chi-vert.vercel.app/",
      techStack: "ReactJS + Tailwind CSS + Context API",
      description: [
        "A responsive e-commerce website",
        "Product listings and shopping cart functionality",
        "User-friendly interface built with modern web technologies"
      ]
    }
  ];

  // Courses & Certifications
  const certifications = [
    {
      name: "CCNA: Switching, Routing, and Wireless Essentials",
      organization: "Cisco Networking Academy (RUPP)",
      period: "Sep 2025 – Present"
    },
    {
      name: "CCNA: Introduction to Networks",
      organization: "Cisco Networking Academy (RUPP)",
      period: "Feb 2025 – Aug 2025"
    },
    {
      name: "2025 Youth Leadership Development Program",
      organization: "Possibilities World Training Center, Siem Reap, Cambodia",
      period: "Sep 6, 2025 – Oct 4, 2025"
    }
  ];

  // Achievements
  const achievements = [
    {
      title: "NATIONAL BUSINESS FOR YOUTH 2022",
      date: "Sep 21, 2022",
      description: "Third Prize Winner of Business Plan Competition in youth business development activities organized by Ministry of Education, Youth and Sports (MoEYS) at Institute of Technology of Cambodia , Phnom Penh, Cambodia."
    },
    {
      title: "TOGETHER YOUTH AND COMMUNITY",
      date: "Aug 17, 2024",
      description: "Participated in a community service initiative organized by Paññāsāstra University of Cambodia at Kaun Sat High School, Kompot, Cambodia."
    },
    {
      title: "TOGETHER FOR 100 FAMILIES",
      date: "Jul 06, 2025",
      description: "Community service contribution organized by Paññāsāstra University of Cambodia in Kampong Speu Province, Cambodia."
    }
  ];

  // Interests & Hobbies
  // const interests = [
  //   { name: "Reading", icon: <FaBook /> },
  //   { name: "Volleyball", icon: <PiVolleyballLight /> },
  //   { name: "Music", icon: <FaMusic /> }
  // ];

  // References
  const references = [
    
  ];

  // ==================== END OF EDITABLE DATA ====================

  return (
    <div ref={ref} className="bg-gray-300 p-6">

      {/* ================= PAGE 1 ================= */}
      <div className="bg-white w-[210mm] h-[297mm] mx-auto p-10 text-gray-800" style={{pageBreakAfter: 'always'}}>

        {/* HEADER WITH PHOTO SPACE */}
        <div className="flex justify-between items-start border-b-2 border-blue-600 pb-4" style={{borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: '#2563eb'}}>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900">{personalInfo.name}</h1>
            <p className="text-xl font-semibold text-blue-600 mt-1">
              {personalInfo.jobTitle}
            </p>

            <div className="mt-3 text-sm space-y-1.5 text-gray-700">
              <p className="flex items-center">
                <span className="mr-2"><MdOutlineEmail /></span> {personalInfo.email}
                <span className="mx-3">|</span>
                <span className="mr-2"><MdPhone /></span> {personalInfo.phone}
              </p>
              <p className="flex items-center">
                <span className="mr-2"><MdLocationOn /></span> {personalInfo.address}
              </p>
              <p className="flex items-center text-blue-600">
                <span className="mr-2"><MdLanguage /></span>
                <a href={personalInfo.website} className="hover:underline break-all" target="_blank" rel="noopener noreferrer">
                  My Portfolio Website link
                </a>
              </p>
            </div>
          </div>

          {/* PHOTO PLACEHOLDER */}
          <div className="ml-6 shrink-0">
            <div className="w-31 h-40 rounded-lg bg-gray-100 flex items-center justify-center">
                <span className="text-gray-400 text-sm">
                    <img src={personalInfo.imgSrc} alt="" className="w-full h-full object-cover rounded-lg" />
                </span>
            </div>
          </div>
        </div>

        {/* PROFESSIONAL SUMMARY */}
        <div className="mt-5 break-inside-avoid">
          <h2 className="text-lg font-bold text-gray-900 border-b-2 border-blue-600 pb-1" style={{borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: '#2563eb'}}>
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-sm leading-relaxed mt-3 text-gray-700 text-justify">
            {professionalSummary}
          </p>
        </div>

        {/* SKILLS */}
        <div className="mt-5 break-inside-avoid">
          <h2 className="text-lg font-bold text-gray-900 border-b-2 border-blue-600 pb-1" style={{borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: '#2563eb'}}>
            SKILLS
          </h2>

          <div className="mt-3">
            <h3 className="font-semibold text-sm text-gray-800 mb-2">
              Technical Skills
            </h3>
            <div className="grid grid-cols-4 gap-2 text-xs">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex items-center bg-gray-50 p-2 rounded" style={{backgroundColor: '#f9fafb'}}>
                  <span className="mr-2">✓</span> {skill}
                </div>
              ))}
            </div>

            <p className="text-xs text-gray-600 mt-2 italic">
              Also proficient in: {additionalTechSkills}
            </p>
          </div>

          <div className="mt-3">
            <h3 className="font-semibold text-sm text-gray-800 mb-2">
              Soft Skills
            </h3>
            <div className="grid grid-cols-4 gap-2 text-xs">
              {softSkills.map((skill, index) => (
                <div key={index} className="flex items-center bg-gray-50 p-2 rounded" style={{backgroundColor: '#f9fafb'}}>
                  <span className="mr-2">✓</span> {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* EDUCATION */}
        <div className="mt-5 break-inside-avoid">
          <h2 className="text-lg font-bold text-gray-900 border-b-2 border-blue-600 pb-1" style={{borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: '#2563eb'}}>
            EDUCATION
          </h2>

          <div className="mt-3 space-y-3">
            {education.map((edu, index) => (
              <div key={index} className="flex">
                <div className="mr-3 text-blue-600 text-xl">▸</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{edu.degree}</p>
                  <p className="text-xs text-gray-600">{edu.institution}</p>
                  <p className="text-xs text-gray-500 italic">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* LANGUAGES */}
        <div className="mt-5 break-inside-avoid">
          <h2 className="text-lg font-bold text-gray-900 border-b-2 border-blue-600 pb-1" style={{borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: '#2563eb'}}>
            LANGUAGES
          </h2>
          <div className="mt-3 space-y-2">
            {languages.map((lang, index) => (
              <div key={index} className="flex items-center text-sm">
                <span className="mr-2 text-blue-600">▸</span>
                <span className="font-semibold">{lang.name}</span>
                <span className="mx-2">-</span>
                <span className="text-gray-600">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* PAGE BREAK */}
      <div className="page-break"></div>

      {/* ================= PAGE 2 ================= */}
      <div className="bg-white w-[210mm] h-[297mm] mx-auto p-10 text-gray-800" style={{pageBreakAfter: 'always'}}>
        

        {/* PROJECTS */}
        <div className="break-inside-avoid mt-5">
          <h2 className="text-lg font-bold text-gray-900 border-b-2 border-blue-600 pb-1" style={{borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: '#2563eb'}}>
            PROJECTS
          </h2>

          <div className="mt-3 space-y-3">
            {projects.map((project, index) => (
              <div key={index} className="flex">
                <div className="mr-3 text-blue-600 text-xl">▸</div>
                <div>
                  <h3 className="font-semibold text-sm">
                    {project.name}
                  </h3>
                  <p className="text-xs text-blue-600 mt-1 break-all inline-flex items-center">
                    <FaLink className="mr-1" /> {project.link}
                  </p>
                  <p className="text-xs mt-1">
                    <span className="font-semibold text-gray-700">Tech Stack:</span> {project.techStack}
                  </p>
                  <ul className="mt-1.5 text-sm text-gray-700 space-y-0.5">
                    {project.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-blue-600">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CERTIFICATIONS */}
        <div className="mt-5 break-inside-avoid">
          <h2 className="text-lg font-bold text-gray-900 border-b-2 border-blue-600 pb-1" style={{borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: '#2563eb'}}>
            COURSES & CERTIFICATIONS
          </h2>

          <div className="mt-3 space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex">
                <div className="mr-3 text-blue-600 text-lg">✓</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{cert.name}</p>
                  <p className="text-xs text-gray-600">{cert.organization} | {cert.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ACHIEVEMENTS */}
        <div className="mt-5 break-inside-avoid">
          <h2 className="text-lg font-bold text-gray-900 border-b-2 border-blue-600 pb-1" style={{borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: '#2563eb'}}>
            ACHIEVEMENTS
          </h2>

          <div className="mt-3 space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex">
                <div className="mr-3 text-blue-600 text-lg">★</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{achievement.title}</p>
                  <p className="text-xs text-gray-500 mb-1 inline-flex items-center"><FaCalendar className="mr-1" /> {achievement.date}</p>
                  <p className="text-sm text-gray-700">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* INTERESTS
        <div className="mt-5 break-inside-avoid">
          <h2 className="text-lg font-bold text-gray-900 border-b-2 border-blue-600 pb-1" style={{borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: '#2563eb'}}>
            INTERESTS & HOBBIES
          </h2>
          <div className="mt-3 flex gap-4 text-sm">
            {interests.map((interest, index) => (
              <div key={index} className="flex items-center bg-gray-50 px-3 py-2 rounded-lg" style={{backgroundColor: '#f9fafb'}}>
                <span className="mr-2">{interest.icon}</span> {interest.name}
              </div>
            ))}
          </div>
        </div> */}

        {/* REFERENCES */}
        <div className="mt-5 break-inside-avoid">
          <h2 className="text-lg font-bold text-gray-900 border-b-2 border-blue-600 pb-1" style={{borderBottomWidth: '2px', borderBottomStyle: 'solid', borderBottomColor: '#2563eb'}}>
            REFERENCES
          </h2>

          <div className="mt-3 space-y-3">
            {references && references.length > 0 ? (
              references.map((reference, index) => (
                <div key={index} className="flex text-xs">
                  <div className="mr-2 text-blue-600 shrink-0">📋</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-900">{reference.name}</p>
                    <p className="text-gray-700 truncate">{reference.position} at {reference.institution}</p>
                    <p className="text-gray-600 truncate">
                      <MdOutlineEmail className="inline mr-1" /> {reference.email}
                    </p>
                    <p className="text-gray-600 truncate">
                      <MdPhone className="inline mr-1" /> {reference.phone}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-xs text-gray-700 italic">Available upon request</p>
            )}
          </div>
        </div>

      </div>

    </div>
  );
});

CV.displayName = "CV";

export default CV;