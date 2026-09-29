import MyPhoto from './media/My-new-photo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function AboutMe() {

   const scrollToContacts = () => {
    const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start'    
            });
        }
   }

  return (
    <div className="flex items-center justify-center min-h-screen container mx-auto px-6 text-left ">
    
     <div className='flex flex-col '>
          <h1 className="text-white font-bold text-7xl">
            Hello, I`m Kyrylo Nesvitailo.
          </h1>
        

          <p className="text-gray-300 mt-6 md:mt-4 text-sm md:text-base leading-relaxed">
         Czech Republic based Full-Stack Developer passionate about building scalable web ecosystems, high-load frontend interfaces, and clean backend architecture.
         </p>

          <div className="flex justify-center md:justify-start space-x-5 mt-6">

      <button onClick={scrollToContacts} className='bg-lime-400 rounded-xl p-2' > 
        CONTACT ME
      </button>

            <a
              href="https://github.com/Kyrylo173"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-400 hover:text-lime-500 transition"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>

            <a
              href="https://www.linkedin.com/in/nesvitailo-kyrylo-400222390"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-400 hover:text-lime-500 transition"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>

            <a
              href="https://www.instagram.com/young_programer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lime-400 hover:text-lime-500 transition"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
   <div className="flex justify-center mt-6 md:hidden">
            <img
              src={MyPhoto}
              alt="My Photo"
              className="h-auto w-48 rounded-2xl select-none"
            />
          </div>
        </div>
     
        <div className="hidden md:flex justify-center">
          <img
            src={MyPhoto}
            alt="My Photo"
            className="h-auto w-64 rounded-2xl"
          />
        </div>
    </div>
  );
}