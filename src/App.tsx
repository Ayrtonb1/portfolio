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
      <div className="colour-container">
        <div className="colour-example" id="c-002642"></div>
        <div className="colour-example" id="c-840032"></div>
        <div className="colour-example" id="c-E59500"></div>
        <div className="colour-example" id="c-E5DADA"></div>
        <div className="colour-example" id="c-02040F"></div>
      </div>
    </>
  );
}

export default App;
