import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export default function NavBar({ darkMode, toggleTheme }) {
  return (
    <nav className="py-10 mb-12 flex justify-between items-center dark:text-white">
      <h1 className="font-burtons text-xl">DEVELOPED BY</h1>
      <ul className="flex items-center space-x-4">
        <li><a href="#bio" className="hover:text-teal-500 dark:hover:text-teal-300">Bio</a></li>
        <li><a href="#skills" className="hover:text-teal-500 dark:hover:text-teal-300">Skills</a></li>
        <li><a href="#portfolio" className="hover:text-teal-500 dark:hover:text-teal-300">Portfolio</a></li>
        <li><a href="#contact" className="hover:text-teal-500 dark:hover:text-teal-300">Contact</a></li>
        <li>
          {darkMode ? (
            <BsFillSunFill onClick={toggleTheme} className="cursor-pointer text-2xl hover:text-yellow-500" />
          ) : (
            <BsFillMoonFill onClick={toggleTheme} className="cursor-pointer text-2xl hover:text-blue-500" />
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
  );
}
