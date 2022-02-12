import Intro from "./components/intro/Intro";
import Experience from "./components/experience/Experience";
import Projects from "./components/projs/Projects";
import Skills from "./components/skills/Skills";
import Menu from "./components/menu/Menu";

const App = () => {
  return <div>
    <Menu/>
    <Intro/>
    <Experience/>
    <Skills/>
    <Projects/>
  </div>;
};

export default App;
