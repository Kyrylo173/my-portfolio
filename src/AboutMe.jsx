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
            Hello, I am Kyrylo Nesvitailo.
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
   <div className="flex justify-center ml-4 mt-6 md:hidden">
            <img
              src={MyPhoto}
              alt="Kyrylo Nesvitailo"
              className="h-auto w-48 rounded-2xl select-none"
            />
          </div>
        </div>
     
        <div className="relative hidden shrink-0 items-center justify-center md:ml-8 md:flex lg:ml-14">
          <div className="absolute inset-4 translate-x-4 translate-y-4 rounded-[2rem] border border-lime-400/60" />
          <img
            src={MyPhoto}
            alt="Kyrylo Nesvitailo"
            className="relative z-10 h-[22rem] w-64 rounded-[2rem] border border-white/10 bg-white object-cover object-center shadow-[0_20px_60px_rgba(163,230,53,0.2)] transition-transform duration-500 hover:-translate-y-2 lg:h-[28rem] lg:w-80"
          />
        </div>
    </div>
  );
}