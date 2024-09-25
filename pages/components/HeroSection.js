import { motion } from "framer-motion";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import avatar from "../../public/avatar.jpg";

export default function HeroSection() {
  return (
    <motion.div 
      className="text-center p-10 py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">Brandon Ding</h2>
      <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Software Developer</h3>
      <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
        Hi, I&apos;m a full stack developer looking for full-time roles! Welcome to my portfolio!
      </p>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
        <a href="https://www.linkedin.com/in/brandon-ding-b965221b1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/dexon888" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <AiFillGithub />
        </a>
      </div>
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
        <Image src={avatar} alt="Avatar" layout="fill" objectFit="cover" />
      </div>
    </motion.div>
  );
}
