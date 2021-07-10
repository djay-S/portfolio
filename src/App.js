import "./App.scss";
import Home from "./screens/home/home";
import AboutMe from "./screens/aboutMe/aboutMe";
import Projects from "./screens/projects/projects";
import Sidenav from "./screens/sidenav/sidenav";

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Home />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
