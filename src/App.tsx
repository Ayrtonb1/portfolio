import Navbar from "./components/navbar/Navbar";
import MainInfo from "./components/mainInfo/MainInfo";
import Background from "./components/background/Background";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App(): React.JSX.Element {
  return (
    <>
      <Navbar />
      <MainInfo />
      <Background />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
