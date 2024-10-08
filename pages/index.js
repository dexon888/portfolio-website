import React, { useState, useEffect } from 'react';
import Head from "next/head";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

import NeuroMosaic2 from "../public/NeuroMosaicImage2.png";
import ChirpChat1 from "../public/ChirpChatImage1.png";
import PokemonChess1 from "../public/PokemonChessImage1.png";
import AlgoVisualizer1 from "../public/AlgoVisualizerImage1.png";
import ReviewHub1 from "../public/ReviewHubImage1.png";
import Ocular1 from "../public/OcularImage1.png"
import CodeSyncImage from "../public/CodeSyncImage.png"
import frameworks from "../public/frameworks.png";
import languages from "../public/languages.png";
import tools from "../public/tools.png";

const projects = [
  {
    title: "NeuroMosaic",
    description: "An AI-powered project for autocomplete notebooks and art.",
    image: NeuroMosaic2,
    deployedLink: "https://ai-notion-ochre.vercel.app/", 
    repoLink: "https://github.com/dexon888/AI-Notion",
    detailedDescription: "This project leverages AI to provide autocomplete suggestions for creative notebooks and art.",
    points: [
      "Developed an AI-enhanced note-taking application using Next.js with features such as note creation, editing, and organization.",
      "Integrated OpenAI's GPT-3.5 API for intelligent text completion and automatic generation of descriptive thumbnails, enhancing user interaction and content creation.",
      "Implemented a debounced auto-save feature in a real-time editor, reducing server load by 30% and improving user experience through efficient performance."
    ]
  },
  {
    title: "ChirpChat",
    description: "A real-time chat application with unique features.",
    image: ChirpChat1,
    deployedLink: "https://chatot-chat-application.vercel.app/", 
    repoLink: "https://github.com/dexon888/Chatot-Chat-Application",
    detailedDescription: "ChirpChat is a real-time chat application built with modern web technologies.",
    points: [
      "Engineered a real-time chat application using WebSocket technology for seamless bi-directional communication, enabling instant messaging and online presence detection for users.",
      "Maintained a scalable MongoDB database, efficiently handling thousands of chat messages and user data, ensuring data integrity and high performance.",
      "Crafted a RESTful API with Express.js, managing various endpoints for user authentication, message retrieval, and file uploads."
    ]
  },
  {
    title: "Pokemon Chess",
    description: "A fun chess game with Pokemon sprites.",
    image: PokemonChess1,
    deployedLink: "https://pokemon-chess-1.onrender.com",
    repoLink: "https://github.com/dexon888/Pokemon-Chess",
    detailedDescription: "Pokemon Chess brings the strategic game of chess together with Pokemon characters.",
    points: [
      "Developed a Pokémon-themed chess game using React for the front end and Node.js for the back end, incorporating type effectiveness mechanics to enhance strategic gameplay.",
      "Implemented real-time multiplayer functionality with Socket.io, enabling seamless interaction for 50+ concurrent users.",
      "Optimized game state management with MongoDB, reducing data retrieval times by 50% and ensuring efficient and scalable performance.",
      "Utilized Express.js for building robust API endpoints and Redux for managing complex state transitions within the game.",
      "Deployed the application on Vercel for continuous integration and GitHub for version control and collaboration.",
    ]
  },
  {
    title: "Algo-Visualizer",
    description: "A tool to visualize various algorithms.",
    image: AlgoVisualizer1,
    deployedLink: "https://algo-visualizer-sigma.vercel.app/", 
    repoLink: "https://github.com/dexon888/Algo-Visualizer",
    detailedDescription: "Algo-Visualizer helps to understand algorithms through visual representation.",
    points: [
      "Developed an interactive web application using React and Node.js to visualize sorting, pathfinding, and string matching algorithms",
      "Utilized Cypress for integration testing, ensuring robust functionality and a seamless user experience across different use cases and environments.",
    ]
  },
  {
    title: "SciOly Review Hub",
    description: "An AI-powered review assistant for various events in Science Olympiad",
    image: ReviewHub1,
    deployedLink: "https://sci-oly-review-hub.vercel.app/",
    repoLink: "https://github.com/dexon888/SciOly-Review-Hub",
    detailedDescription: "SciOly Review Hub provides AI-generated quizzes for Science Olympiad preparation.",
    points: [
      "Built a full-stack web application for Science Olympiad quiz preparation, leveraging Angular for the frontend and FastAPI for the backend, resulting in a dynamic and interactive study platform used by high school students.",
      "Developed an AI-powered quiz generation feature using OpenAI's GPT-3.5, enabling real-time generation of customized quizzes with multiple-choice and short-answer questions, enhancing the study experience for users.",
      "Implemented a similarity-based grading system for short-answer questions, increasing the accuracy of automated grading and providing detailed feedback to students."
    ]
  },
  {
    title: "Ocular Disease Image Classifier",
    description: "A machine learning project focused on the diagnosis of ocular diseases using retinal images.",
    image: Ocular1,
    deployedLink: "https://colab.research.google.com/drive/1PHEuBA8Z1Wm8TZed8NtwOyxJErHPJFnE?usp=sharing",
    repoLink: "https://colab.research.google.com/drive/1PHEuBA8Z1Wm8TZed8NtwOyxJErHPJFnE?usp=sharing",
    detailedDescription: "This project applies both unsupervised and supervised learning techniques to classify ocular diseases from retinal images. The process includes image preprocessing, PCA for feature reduction, and model training using K-Means and CNN architectures like ResNet50 and Xception.",
    points: [
    "Performed image preprocessing, including flipping and grayscaling, to standardize retinal images for analysis.",
    "Utilized Principal Component Analysis (PCA) to reduce image dimensionality, retaining 95% of variance with 31 components.",
    "Implemented K-Means clustering to differentiate between healthy and diseased eyes, achieving up to 60% accuracy.",
    "Developed supervised learning models using CNN architectures like ResNet50 and Xception, reaching over 50% accuracy with improved hyperparameter tuning and data augmentation."
  ]
  },
  {
    "title": "CodeSync",
    "description": "A collaborative real-time code editor with AI-powered hints.",
    "image": CodeSyncImage, 
    "deployedLink": "https://codespace-6399.onrender.com",
    "repoLink": "https://github.com/dexon888/codespace",
    "detailedDescription": "CodeSync is a real-time collaborative coding platform designed to enhance pair programming and code sharing experiences.",
    "points": [
      "Developed a real-time collaborative code editor using React for the front end and Node.js for the back end, allowing users to code together seamlessly on Leetcode problems.",
      "Integrated AI-powered hints using the OpenAI API, providing users with on-demand assistance and improving problem-solving efficiency.",
      "Implemented real-time synchronization and collaboration features with Socket.io, supporting multiple concurrent users in a single coding session.",
      "Optimized data handling with Apollo GraphQL and Express.js, ensuring efficient and secure communication between the front end and back end.",
    ]
}
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
    "Angular",
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
  const [visibleTooltips, setVisibleTooltips] = useState({});

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

  const handleMouseEnter = (index) => {
    setVisibleTooltips((prevState) => ({
      ...prevState,
      [index]: true,
    }));
  };

  const handleMouseLeave = (index) => {
    setVisibleTooltips((prevState) => ({
      ...prevState,
      [index]: false,
    }));
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
          <NavBar darkMode={darkMode} toggleTheme={toggleTheme} />
          <HeroSection />
        </section>
        <motion.section 
          id="bio"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.2 }}
        >
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Bio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Hello! I&apos;m Brandon, a computer science graduate from the <span className="text-yellow-500">Georgia Institute of Technology</span>. My academic journey and professional experiences, including multiple internships and roles as a teaching assistant, have equipped me with valuable skills in software development and problem-solving. I thrive on tackling complex challenges and enjoy collaborating with others to bring ideas to life. Feel free to connect with me on LinkedIn to discuss opportunities, or check out my projects on GitHub to see what I&apos;ve been working on.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer a wide range of knowledge from various technologies and frameworks!
            </p>
          </div>
        </motion.section>
        <motion.section 
          id="skills" 
          className="pt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.2 }}
        >
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
        </motion.section>
        <motion.section 
          id="portfolio" 
          className="py-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.2 }}
        >
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
              <motion.div 
                key={index} 
                className="relative flex flex-col items-center levitate"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ amount: 0.2 }}
              >
                <div className="w-full h-64 relative overflow-hidden">
                  <Image
                    className="rounded-lg object-cover"
                    layout="fill"
                    src={project.image}
                    alt={project.title}
                  />
                  {visibleTooltips[index] && (
                    <div
                      className="absolute z-50 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-w-sm transition-opacity duration-300"
                      style={{
                        top: '50%',  // Position tooltip in the middle vertically
                        left: '50%',  // Center the tooltip horizontally
                        transform: 'translate(-50%, -50%)',  // Translate to center both horizontally and vertically
                        width: '350px',  // Increase width to allow more space
                        maxWidth: '90%',  // Ensure it doesn't overflow on small screens
                        pointerEvents: 'none',  // Ensures the tooltip doesn't interfere with mouse events
                      }}
                    >
                      <ul
                        className="list-disc list-inside dark:text-gray-300"
                        style={{ fontSize: '10px' }}
                      >
                        {project.points.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-xl font-semibold dark:text-white">{project.title}</h4>
                  <p className="text-md text-gray-800 dark:text-gray-200">{project.description}</p>
                  <div className="flex justify-center gap-4 mt-2">
                    <a
                      href={project.deployedLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition"
                    >
                      View Project
                    </a>
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition"
                    >
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
        <motion.section 
          id="contact" 
          className="py-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 0.2 }}
        >
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
        </motion.section>
      </main>
    </div>
  );
}
