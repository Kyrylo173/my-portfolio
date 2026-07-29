import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';


export default function Contact(){
    return(
      <section id='contact'>
        <div className="bg-black py-16">
          <div className='container mx-auto px-6 text-left'>
            <h1 className="text-white font-bold text-5xl md:text-7xl mb-4 tracking-tight">LET`S CONNECT</h1>
            <p className="text-gray-300  mb-8">Feel free to reach out to me via email or social media.</p>
            <div className="mt-6 text-left">
             <a href="https://github.com/Kyrylo173" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-500">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/nesvitailo-kyrylo-400222390?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-500">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
           <a href="https://www.instagram.com/young_programer?igsh=dmlrcDBnMmNsbWpz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-lime-400 hover:text-lime-500">
            <FontAwesomeIcon icon={faInstagram} size='2x' />
          </a>
          <a href="mailto:nesvitajlokirill@gmail.com" className="text-gray-300 hover:text-purple-500">
            <FontAwesomeIcon icon={faGoogle} size='2x' className="text-lime-400 hover:text-lime-500" />
          </a>
          </div>
            </div>
        </div>
      </section>
    )
}