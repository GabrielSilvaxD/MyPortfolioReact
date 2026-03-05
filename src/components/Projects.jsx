import image1 from "/public/1.png";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import image4 from "/public/4.png";

import { motion } from "framer-motion";

const projectsData = [
  {
    image: image1,
    title: "Weather Dashboard",
    description:
      "A weather dashboard that allows users to search for a city and view the current weather conditions as well as a 5-day forecast.",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
  },
  {
    image: image2,
    title: "CMS-STAFF",
    description:
      "A CMS for a staffing agency that allows users to view, add, edit, and delete staff members.",
    technologies: ["Javascript", "postgreSQL", "nodejs"],
  },
  {
    image: image3,
    title: "Taskmaster Pro",
    description:
      "A comprehensive task manager designed to boost productivity and help users stay organized. It offers an intuitive interface for managing tasks, setting deadlines, and prioritizing work, making it easier to track progress and meet goals. Whether you’re managing personal projects or collaborating with a team, this tool provides the structure you need to stay on top of everything and work more efficiently.",
    technologies: ["typescript", "react", "tailwindcss, nodejs"],
  },
  {
    image: image4,
    title: "Todo APP",
    description:
      "A feature-rich to-do app that allows users to easily create, edit, and delete tasks, helping them stay organized and focused. With a simple yet powerful interface ensuring they stay on top of their responsibilities. Whether it’s for personal use or managing work projects, this app is designed to enhance productivity by making task management seamless and efficient.",
    technologies: ["typescript", "react", "tailwindcss"],
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-8 md:flex-row md:gap-16"
    >
      <img
        src={project.image}
        alt=""
        className="w-full max-w-[500px] shrink-0 cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[380px] md:h-[260px] h-[220px] object-cover"
      />
      <div className="flex flex-col gap-6 text-white">
        <div className="flex flex-col gap-2">
          <div className="text-2xl font-bold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-3xl font-bold" style={{background:'linear-gradient(to right, #6366f1, #3b82f6)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text', width:'fit-content'}}>Technologies</h3>
          <div style={{display:'flex', flexWrap:'wrap', gap:'0.5rem'}}>
            {project.technologies.map((tech, index) => (
              <span key={index} style={{background:'linear-gradient(to right, #6366f1, #3b82f6)', color:'white', padding:'0.4rem 1rem', borderRadius:'9999px', fontSize:'0.875rem', fontWeight:'700'}}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div
      id="Project"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8 md:px-14 md:py-24"
    >
      <h1 className="text-5xl font-bold md:text-7xl bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
        My Projects
      </h1>

      <div className="flex w-full max-w-[1000px] flex-col gap-16">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
