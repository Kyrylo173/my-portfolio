import MyPhoto from './media/my-photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function AboutMe() {
    return (
          <div className="flex items-center justify-center h-screen px-4">
    <div className="border border-gray-500 p-8 rounded-xl bg-gray-800 flex items-center justify-between gap-10 max-w-4xl w-full">
      <div className="max-w-xl">
        <h1 className="bg-gradient-to-r from-purple-500 to-pink-500 text-4xl font-bold bg-clip-text text-transparent">
          Welcome to my portfolio
        </h1>
        <p className="text-gray-300 mt-4">
          I’m a passionate web developer with experience in building responsive 
          and interactive web applications using modern technologies. Now i`m a student in a hight school, but i`m looking for
          an internship to gain real-world experience and contribute to exciting projects. I`m eager to learn and grow as a developer, and I`m always open to new opportunities and challenges.
          I`ve knowen many programing languges and technologies, but my favorite it`s a Frontend development, because i`m a creative person and i like to create something new and unique.
        </p>
        <div className="flex space-x-4 mt-6">
          <a href="https://github.com/Kyrylo173" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-500">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/nesvitailo-kyrylo-400222390?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-500">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
           <a href="https://www.instagram.com/young_programer?igsh=dmlrcDBnMmNsbWpz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-500">
            <FontAwesomeIcon icon={faInstagram} size='2x' />
          </a>
        </div>
      </div>
      <div>
        <img
          src={MyPhoto}
          alt="My Photo"
          className="w-60 h-60 rounded-full object-cover border-2 border-purple-500"
        />
      </div>

    </div>
     <div>
  </div>
</div>
    )
}