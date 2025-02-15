
import image1 from "/public/1.png";
import image2 from "/public/2.png";
import image3 from "/public/3.png";
import image4 from "/public/4.png";


import { motion } from "framer-motion";


const projectsData = [
  {
    image: image1,
    title: "Weather Dashboard",
    description: "A weather dashboard that allows users to search for a city and view the current weather conditions as well as a 5-day forecast.", 
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
  },
  {
    image: image2,
    title: "CMS-STAFF",
    description: "A CMS for a staffing agency that allows users to view, add, edit, and delete staff members.",
    technologies: ["Javascript", "postgreSQL", "nodejs"],
  },
  {
    image: image3,
    title: "Taskmaster Pro",
    description: "A comprehensive task manager designed to boost productivity and help users stay organized. It offers an intuitive interface for managing tasks, setting deadlines, and prioritizing work, making it easier to track progress and meet goals. Whether you’re managing personal projects or collaborating with a team, this tool provides the structure you need to stay on top of everything and work more efficiently.",
    technologies: ["typescript", "react", "tailwindcss, nodejs"],
  },
  {
    image: image4,
    title: "Todo APP",
    description: "A feature-rich to-do app that allows users to easily create, edit, and delete tasks, helping them stay organized and focused. With a simple yet powerful interface ensuring they stay on top of their responsibilities. Whether it’s for personal use or managing work projects, this app is designed to enhance productivity by making task management seamless and efficient.",
    technologies: ["typescript", "react", "tailwindcss"],
  },
]

const ProjectCard = ({project}) => {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
    
    <img src={project.image} alt="" className="w-full cursor-pointer rounded 2-x1 transition-all duration-300 hover:scale-105 md:w-[300px]"/>
      <div className="flex flex-col gap-5">

      <div className="flex flex-col gap-3">
       <div className="text-x1 font-semibold">{project.title}</div>
        <p className="text-gray-400">{project.description}</p>
        </div>

        <div className="flex flex-warap gap-5">
          {
            project.technologies.map((tech, index)=> (
              <span key={index} className="rounded-1g bg-black p-3">
                {tech}
              </span>
            ))
          }
          </div>
      </div>
    </div>
)
}

const Projects = () => {
  return (
    <div id="Projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px14 md:py14 md:py-24">
      <h1 className="text-4x1 font-light text-white md:text-6x1">My Projects</h1>
    
    <div className="flex -w-full max-w-[1000px] flex-col gap-16 text-white">
      {
        projectsData.map((project, index) => (
          <ProjectCard key={index} project={project}/>
        ))
      }

    </div>

    </div>
  )
}

export default Projects
