import Layout from './components/layout/Layout.jsx';
import Hero from './components/sections/Hero/Hero.jsx';
import About from './components/sections/About/About.jsx';
import Skills from './components/sections/Skills/Skills.jsx';
import Projects from './components/sections/Projects/Projects.jsx';
import Experience from './components/sections/Experience/Experience.jsx';
import Contact from './components/sections/Contact/Contact.jsx';
import ChatWidget from './components/chat/ChatWidget.jsx';

// App only decides ORDER and composition. Each section owns its own
// content/data/animation — add or reorder sections here without touching
// their internals. This is what makes the site scale: a new section is
// "create the folder, import it, add one line here."
export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <ChatWidget />
    </Layout>
  );
}
