import "./App.scss";
import Home from "./screens/home/home";
import AboutMe from "./screens/aboutMe/aboutMe";
import Projects from "./screens/projects/projects";
import Sidenav from "./screens/sidenav/sidenav";
import ContactMe from "./screens/contactMe/contactMe";
import Scrolltop from "./screens/scrollTop/scrollTop";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Scrolltop />
      <Home />
      <AboutMe />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
