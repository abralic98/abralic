import { Switch, Route, BrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProjectsPage from "./pages/ProjectsPage"
import SelectedProject from "./components/SelectedProject"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
              <Route exact path="/home">
                    <HomePage/>
              </Route>
              <Route exact path="/about">
                    <AboutPage/>
              </Route>
              <Route exact path="/projects">
                    <ProjectsPage/>
              </Route>
              <Route exact path="/projects/carshop">
                    <SelectedProject/>
              </Route>
              <Route exact path="/projects/katanashop">
                    <SelectedProject/>
              </Route>
              <Route exact path="/projects/meetings">
                    <SelectedProject/>
              </Route>
              <Route exact path="/projects/balkanflix">
                    <SelectedProject/>
              </Route>
          </Switch>
      </BrowserRouter>
          
    </div>
  );
}

export default App;
