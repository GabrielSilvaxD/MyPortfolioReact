// import image from "/public/image.jpg";
import {motion} from "framer-motion";
import image from "/public/image.jpg";

const hero = () => {
  return (
    <div id="Home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
     <div className="flex flex-col items-center justify-center gap-10 text-white">
    
    <motion.div
    initial={{y: -50, opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{duration:0.8, delay:0.2}}
    

    >

      <img src={image} alt="" className="w-[300px] cursor-pointer rounded-full shadow-x1 shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2x1 hover:shadow-indigo-600 md:w-[350px]"/>
       </motion.div>

       <motion.div 
      initial={{y: 50, opacity:0}}
      animate={{y:0, opacity:1}}
      transition={{duration:0.8, delay:0.2}}
       
       className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
        <h1 className="bg-gradient-to-r from-blue-500 to bg-pink-500 bg-clip-text text-transparent text-5x1 fonte-light md:text-7x1">Gabriel Silva </h1>

       
        <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2x1 fonte-light md:text-3x1">Full Stack Developer</h3>
        <p className="md:text-base text-pretty text-sm text-gray-400">
        I’m a Full Stack Developer based in Sydney, currently freelancing and always on the lookout for new opportunities to grow and challenge myself. My passion lies in creating innovative solutions, and I thrive in environments that allow me to push boundaries and collaborate with others. I’m open to new projects and partnerships and am eager to contribute my skills to make a positive impact. If you’re looking for someone who is committed to growth, innovation, and delivering results, feel free to reach out.
        </p>
       </motion.div>
     </div>
    </div>
  )
}

export default hero
