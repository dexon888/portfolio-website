import Head from "next/head";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import avatar from "../public/avatar.jpg";
import Image from "next/image";
import NeuroMosaic2 from "../public/NeuroMosaicImage2.png";
import ChirpChat1 from "../public/ChirpChatImage1.png";
import PokemonChess1 from "../public/PokemonChessImage1.png";
import AlgoVisualizer1 from "../public/AlgoVisualizerImage1.png"
import frameworks from "../public/frameworks.png";
import languages from "../public/languages.png";
import tools from "../public/tools.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const projects = [
  {
    title: "NeuroMosaic",
    description: "An AI-powered projects of autocomplete notebooks and art.",
    image: NeuroMosaic2,
    link: "https://github.com/dexon888/AI-Notion",
  },
  {
    title: "ChirpChat",
    description: "A real-time chat application with unique features.",
    image: ChirpChat1,
    link: "https://github.com/dexon888/Chatot-Chat-Application",
  },
  {
    title: "Pokemon Chess",
    description: "A fun chess game with Pokemon sprites.",
    image: PokemonChess1,
    link: "https://github.com/dexon888/Pokemon-Chess",
  },
  {
    title: "Algo-Visualizer",
    description: "A tool to visualize various algorithms",
    image: AlgoVisualizer1,
    link: "https://github.com/dexon888/Algo-Visualizer",
  },
];

const skills = {
  Languages: [
    "Java",
    "Python",
    "C# .Net",
    "JavaScript",
    "HTML/CSS",
    "LateX",
    "SQL",
    "TypeScript",
    "Bash",
    "Powershell",
    "Julia",
  ],
  Frameworks: [
    "Express",
    "MongoDB",
    "React",
    "Node.js",
    "Bootstrap Developer Tools",
    "JUnits",
    "Django",
    "Spring Boot",
    "Flask",
    "Next.js",
    "FastAPI",
  ],
  Libraries: [
    "pandas",
    "NumPy",
    "Matplotlib",
    "OpenCV",
    "PyTorch",
    "Tensorflow",
    "Scikit-learn",
    "Redux",
    "jQuery",
    "D3.js",
  ],
  Technologies: [
    "AWS",
    "Microsoft Azure",
    "Docker",
    "Linux",
    "Networking",
    "Google Firebase",
    "Google Cloud",
    "Git",
    "Eclipse",
    "CI/CD",
  ],
  "APIs and Protocols": ["REST", "GraphQL"],
  Tools: ["Visual Studio Code", "Jira", "Postman", "Figma"],
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("theme", !darkMode ? "dark" : "light");
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      const serviceID = 'service_s8mdv82';
      const templateID = 'template_4ohnqk7';
      const userID = '_e7xgfLNmbI76dDy4';

      try {
        await emailjs.send(
          serviceID,
          templateID,
          {
            name: values.name,
            email: values.email,
            message: values.message,
          },
          userID
        );
        alert('Message sent successfully!');
        resetForm();
      } catch (error) {
        console.error('Failed to send message. Error:', error);
        alert('Failed to send message. Please try again later.');
      }
    },
  });

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Website Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between items-center dark:text-white">
            <h1 className="font-burtons text-xl">DEVELOPED BY</h1>
            <ul className="flex items-center space-x-4">
              <li>
                <a href="#bio" className="hover:text-teal-500 dark:hover:text-teal-300">
                  Bio
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-teal-500 dark:hover:text-teal-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-teal-500 dark:hover:text-teal-300">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-500 dark:hover:text-teal-300">
                  Contact
                </a>
              </li>
              <li>
                {darkMode ? (
                  <BsFillSunFill
                    onClick={toggleTheme}
                    className="cursor-pointer text-2xl hover:text-yellow-500"
                  />
                ) : (
                  <BsFillMoonFill
                    onClick={toggleTheme}
                    className="cursor-pointer text-2xl hover:text-blue-500"
                  />
                )}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 hover:shadow-lg"
                  href="https://docs.google.com/document/d/1Zx2Vl-wT2s_GotkDOx5A56h9dilaWyWcbTndP5t96Ok/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Brandon Ding
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Hi, I&apos;m a full stack developer looking for full-time roles! Welcome to my portfolio!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://www.linkedin.com/in/brandon-ding-b965221b1/" target="_blank" rel="noopener noreferrer" className="levitate">
                <AiFillLinkedin aria-label="LinkedIn" />
              </a>
              <a href="https://github.com/dexon888" target="_blank" rel="noopener noreferrer" className="levitate">
                <AiFillGithub aria-label="GitHub" />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={avatar} alt="Avatar" layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section id="bio">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Bio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Hello! I&apos;m Brandon, a computer science graduate from the <span className="text-yellow-500">Georgia Institute of Technology</span>. My academic journey and professional experiences, including multiple internships and roles as a teaching assistant, have equipped me with valuable skills in software development and problem-solving. I thrive on tackling complex challenges and enjoy collaborating with others to bring ideas to life. Feel free to connect with me on LinkedIn to discuss opportunities, or check out my projects on GitHub to see what I&apos;ve been working on.
            </p>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer a wide range of knowledge from various technologies and frameworks!
            </p>
          </div>
        </section>
        <section id="skills" className="pt-10">
          <div className="lg:flex gap-10">
            <motion.div 
              className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1"
              whileHover={{ scale: 1.1 }}
            >
              <Image src={languages} alt="Languages" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Languages & Tools</h3>
              <ul className="py-2">
                {skills.Languages.concat(skills.Tools).map((skill, index) => (
                  <li key={index} className="text-gray-800 py-1 dark:text-gray-600">{skill}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1"
              whileHover={{ scale: 1.1 }}
            >
              <Image src={frameworks} alt="Frameworks" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Frameworks & Libraries</h3>
              <ul className="py-2">
                {skills.Frameworks.concat(skills.Libraries).map((skill, index) => (
                  <li key={index} className="text-gray-800 py-1 dark:text-gray-600">{skill}</li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1"
              whileHover={{ scale: 1.1 }}
            >
              <Image src={tools} alt="Technologies & APIs" width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">Technologies & APIs</h3>
              <ul className="py-2">
                {skills.Technologies.concat(skills["APIs and Protocols"]).map((skill, index) => (
                  <li key={index} className="text-gray-800 py-1 dark:text-gray-600">{skill}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
        <section id="portfolio" className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a software developer, I&apos;ve worked on multiple
              <span className="text-teal-500"> projects. </span>
              Feel free to take a look at any of them here! 
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 py-10">
            {projects.map((project, index) => (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center levitate" key={index}>
                <div className="w-full h-64 relative overflow-hidden">
                  <Image
                    className="rounded-lg object-cover"
                    layout="fill"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-xl font-semibold dark:text-white">{project.title}</h4>
                  <p className="text-md text-gray-800 dark:text-gray-200">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>
        <section id="contact" className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Contact Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Feel free to reach out to me for any inquiries or opportunities!
            </p>
          </div>
          <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:bg-gray-800">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200" htmlFor="name">
                Name
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.name && formik.errors.name ? 'border-red-500' : ''}`}
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <p className="text-red-500 text-xs italic">{formik.errors.name}</p>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200" htmlFor="email">
                Email
              </label>
              <input
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-500 text-xs italic">{formik.errors.email}</p>
              ) : null}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2 dark:text-gray-200" htmlFor="message">
                Message
              </label>
              <textarea
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formik.touched.message && formik.errors.message ? 'border-red-500' : ''}`}
                id="message"
                name="message"
                rows="4"
                placeholder="Your message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <p className="text-red-500 text-xs italic">{formik.errors.message}</p>
              ) : null}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}
