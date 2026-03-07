import MyPhoto from './media/my-photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function AboutMe() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10">
      <div className="border border-gray-500 p-6 md:p-8 rounded-xl bg-gray-800 flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 max-w-4xl w-full">

        <div className="max-w-xl text-center md:text-left">

          <h1 className="bg-gradient-to-r from-purple-500 to-pink-500 text-3xl md:text-4xl font-bold bg-clip-text text-transparent">
            Welcome to my portfolio
          </h1>
          <div className="flex justify-center mt-6 md:hidden">
            <img
              src={MyPhoto}
              alt="My Photo"
              className="w-36 h-36 rounded-full object-cover border-2 border-purple-500"
            />
          </div>

          <p className="text-gray-300 mt-6 md:mt-4 text-sm md:text-base leading-relaxed">
            I’m a passionate web developer with experience in building responsive 
            and interactive web applications using modern technologies. Now I’m a student 
            in a high school, but I’m looking for an internship to gain real-world experience 
            and contribute to exciting projects. I’m eager to learn and grow as a developer, 
            and I’m always open to new opportunities and challenges.

            I’ve known many programming languages and technologies, but my favorite is 
            Frontend development because I’m a creative person and I like to create 
            something new and unique.
          </p>

          <div className="flex justify-center md:justify-start space-x-5 mt-6">
            <a
              href="https://github.com/Kyrylo173"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-500 transition"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>

            <a
              href="https://www.linkedin.com/in/nesvitailo-kyrylo-400222390"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-500 transition"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>

            <a
              href="https://www.instagram.com/young_programer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-purple-500 transition"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>

        </div>
        <div className="hidden md:flex justify-center">
          <img
            src={MyPhoto}
            alt="My Photo"
            className="w-60 h-60 rounded-full object-cover border-2 border-purple-500"
          />
        </div>

      </div>
    </div>
  );
}