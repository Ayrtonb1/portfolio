import Navbar from "./components/navbar/Navbar";
import MainInfo from "./components/mainInfo/MainInfo";
import Background from "./components/background/Background";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { ThemeProvider } from "./components/ThemeContext";

function App(): React.JSX.Element {
  return (
    <>
      <ThemeProvider>
        <div className="backdrop">
          <div className="content-background">
            <Navbar />

            <MainInfo />
            <Background />
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
