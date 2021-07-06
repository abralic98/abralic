import classes from "./ProjectsPage.module.css"
import Navigation from "../components/Navigation"
import ProjectBlock from "../components/ProjectBlock"
import ProjectJSON from "../Projects.json"
import {useContext, useState} from "react"


const ProjectsPage = () =>{
    function WindowSize(){
        const [size,setSize] = useState([window.innerWidth,window.innerHeight])
        return size;
    }
    const [width,height] = WindowSize();
   
    return (
        <div className={classes.background}>
            <Navigation/>
            <h1>Projects</h1>
            <div className={classes.projects}>
                <ProjectBlock projectData={ProjectJSON[0]}/>
                {width<1000 ? <p>Car shopping site</p> : null}
                <ProjectBlock projectData={ProjectJSON[1]}/>
                {width<1000 ? <p>Sword shopping site</p> : null}
                <ProjectBlock projectData={ProjectJSON[2]}/>
                {width<1000 ? <p>React meetings</p> : null}
                <ProjectBlock projectData={ProjectJSON[3]}/>
                {width<1000 ? <p>BalkanFlix</p> : null}
            </div>
            <h3>More to come</h3>
            
        </div>
    )
}
export default ProjectsPage