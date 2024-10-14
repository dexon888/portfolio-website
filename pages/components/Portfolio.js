import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Portfolio = ({ projects = [], visibleTooltips = {}, handleMouseEnter, handleMouseLeave }) => {
  if (!projects || projects.length === 0) {
    return <p>No projects to display.</p>; // Handle cases where projects are undefined or empty
  }

  return (
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
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)',
                    width: '350px',
                    maxWidth: '90%',
                    pointerEvents: 'none'
                  }}
                >
                  <ul className="list-disc list-inside dark:text-gray-300" style={{ fontSize: '10px' }}>
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
  );
};

export default Portfolio;
