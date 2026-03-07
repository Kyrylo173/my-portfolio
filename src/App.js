import './App.css';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Stack from './TechStack';
import Contact from './Contact';
function App() {
  return (
 <div className="min-h-screen bg-gray-900">
  <div className="items-center justify-center h-screen">
    <AboutMe />
    <Stack />
    <Projects/>
    <Contact />
</div>
</div>
  );
}

export default App;
