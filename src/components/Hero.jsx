// import image from "/public/image.jpg";
import { motion } from "framer-motion";
import image from "/public/image.jpg";

const hero = () => {
  return (
    <div
      id="home"
      className="px-6 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={image}
            alt=""
            className="w-[250px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]"
          />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-bold md:text-7xl">
            Gabriel Silva
          </h1>

          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-semibold md:text-4xl">
            Full Stack Developer
          </h3>
          <p className="mt-4 text-base md:text-lg text-gray-400 leading-relaxed">
            I&apos;m a Full Stack Developer in Sydney working across JavaScript,
            React, and Node.js. I went from managing logistics and running
            courier operations to writing code — and that shift taught me
            something most devs don&apos;t learn in bootcamp: software exists to move
            a business forward, not just to look good on GitHub. These days I&apos;m
            focused on full-stack web apps and AI-powered automation — I&apos;ve
            built systems that integrate WhatsApp Business API, Claude AI, and
            Node.js to help small businesses handle leads. I&apos;m looking for my
            next role where I can bring that builder mentality to a team that
            ships fast and cares about the product. Based in Sydney. PR holder.
            Ready to go.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default hero;
