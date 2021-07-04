import classes from "./ProjectsPage.module.css"
import Navigation from "../components/Navigation"
import ProjectBlock from "../components/ProjectBlock"
import ProjectJSON from "../Projects.json"
import {useContext} from "react"


const ProjectsPage = () =>{
   
    return (
        <div className={classes.background}>
            <Navigation/>
            <h1>Projects</h1>
            <div className={classes.projects}>
                <ProjectBlock projectData={ProjectJSON[0]}/>
                <ProjectBlock projectData={ProjectJSON[1]}/>
                <ProjectBlock projectData={ProjectJSON[2]}/>
                <ProjectBlock projectData={ProjectJSON[3]}/>
            </div>
            <h3>More to come</h3>
            
        </div>
    )
}
export default ProjectsPage