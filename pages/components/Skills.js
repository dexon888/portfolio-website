import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Skills = ({ skills, images }) => {
  if (!skills || !images) {
    return null; // Ensure the component doesn't try to render without proper data
  }

  return (
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
          <Image src={images.languages} alt="Languages" width={100} height={100} />
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
          <Image src={images.frameworks} alt="Frameworks" width={100} height={100} />
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
          <Image src={images.tools} alt="Technologies & APIs" width={100} height={100} />
          <h3 className="text-lg font-medium pt-8 pb-2">Technologies & APIs</h3>
          <ul className="py-2">
            {skills.Technologies.concat(skills["APIs and Protocols"]).map((skill, index) => (
              <li key={index} className="text-gray-800 py-1 dark:text-gray-600">{skill}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
