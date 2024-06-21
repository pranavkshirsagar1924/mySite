import React, { useState, useEffect } from 'react';
import style from "../styles/skills.module.css";

export default function Skills() {
  const labels = ["Python", "Flask", "NextJs", "ReactJs", "API", "AWS", "WEB Scrapping", "Android Development"];

  const [currentLabelIndex, setCurrentLabelIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLabelIndex((prevIndex) => (prevIndex + 1) % labels.length);
    }, 4000); // Change the interval time as needed

    return () => clearInterval(interval);
  }, [labels.length]);

  return (
    <div className={style.main_frame}>
      <div className={style.left}>
        <img src='/images/hon.gif' alt='Animation' />
      </div>
      <div className={style.right}>
        <ul className={style.skills}>
          {labels.map((label, index) => (
            <li key={index} style={{ display: index === currentLabelIndex ? 'block' : 'none' }}>
              <h1 className={style.max}>{label}</h1><br />
              <b className={style.min}>{getDescription(label)}</b>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// Helper function to get random color
function getRandomColor() {
  const colors = ['#00ff62', '#ffea00', '#ff1100', '#a600ff', '#208604', '#ff0095', '#ff0000'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Helper function to get description based on label
function getDescription(label) {
  switch (label) {
    case 'Python':
      return "Proficient in using Python for various applications.";
    case 'Flask':
      return "Experienced in building web applications and RESTful APIs with Flask.";
    case 'NextJs':
      return "Skilled in using Next.js for server-side rendering and building modern web applications.";
    case 'ReactJs':
      return "Strong command of React.js for building interactive user interfaces.";
    case 'API':
      return "Knowledgeable in designing and consuming APIs.";
    case 'AWS':
      return "Experienced in deploying and managing applications on AWS.";
    case 'WEB Scrapping':
      return "Skilled in extracting data from websites using web scraping techniques.";
    case 'Android Development':
      return "Proficient in developing Android applications.";
    default:
      return "";
  }
}
