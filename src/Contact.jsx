import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';


export default function Contact(){
    return(
        <div className="bg-gray-900 py-12">
            <h1 className="text-white text-3xl font-bold text-center mb-8">Contact Me</h1>
            <p className="text-gray-300 text-center">Feel free to reach out to me via email or social media.</p>
            <div className="flex justify-center mt-6">
             <a href="https://github.com/Kyrylo173" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-500">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/nesvitailo-kyrylo-400222390?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-500">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
           <a href="https://www.instagram.com/young_programer?igsh=dmlrcDBnMmNsbWpz&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-500">
            <FontAwesomeIcon icon={faInstagram} size='2x' />
          </a>
          <a href="mailto:fogygom@gmail.com" className="text-gray-300 hover:text-purple-500">
            <FontAwesomeIcon icon={faGoogle} size='2x' className="text-gray-300 hover:text-purple-500" />
          </a>
            </div>
        </div>
    )
}