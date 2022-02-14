import classes from "./SelectedProject.module.css"
import { ProjectContext } from "../context/ProjectContext"
import { useContext} from "react"
import Navigation from "./Navigation"
import {SiCss3, SiJavascript, SiHtml5, SiReact, SiFirebase, SiNodeDotJs, SiMysql, SiGithub, SiYoutube} from "react-icons/si"
import rest from "../images/rest.png"
import { Link } from "react-router-dom"

const SelectedProject = () =>{
    const {projects} = useContext(ProjectContext)
    const [project,setProject] = projects

    console.log(project)
    function github(){
        window.open(
            `${project.sourceLink}`,
            '_blank'
          );
    }
    function youtube(){
        window.open(
            `${project.youtube}`,
            '_blank'
          );
    }
    return (
        <div className={classes.background}>
            <Navigation/>
            <h1>{project.name}</h1>
            {project.description.length===2 ? 
            <p className={classes.description}>{project.description[0]} <br/><br/> {project.description[1]}</p> : 
            <p className={classes.description}>{project.description[0]} <br/><br/> {project.description[1]} <br/><br/> {project.description[2]} <br/><br/> {project.description[3]}</p>}
            <h2>Technologies</h2>
            {project.technologies.length===3 && project.technologies[0]==="HTML5" ? 
            <ul>
                <li className={classes.trio}>
                    {project.technologies[0]==="HTML5" ? <SiHtml5/>: null} 
                </li>
                <li className={classes.trio}>
                    {project.technologies[1]==="CSS3" ? <SiCss3/> : null}
                </li>
                <li className={classes.trio}>
                    {project.technologies[2]==="JavaScript" ? <SiJavascript/> : null}
                </li>
            </ul> : 
            project.technologies.length===3  ?  
            <ul>
                <li className={classes.tech}>
                    {project.technologies[0]==="React js" ? <SiReact/> : null}
                </li>
                <li className={classes.tech}>
                    {project.technologies[1]==="CSS3" ? <SiCss3/> : null}
                </li>
                <li className={classes.tech}>
                    {project.technologies[2]==="Google Firebase" ? <SiFirebase/> : null}
                </li>
            
            </ul> : 
            project.technologies.length===4 ? 
            <ul>
                <li className={classes.tech}>
                    {project.technologies[0]==="React js" ? <SiReact/> : null}
                </li>
                <li className={classes.tech}>
                    {project.technologies[1]==="CSS3" ? <SiCss3/> : null}
                </li>
                <li className={classes.tech2}>
                    {project.technologies[2]==="Node js" ? <SiNodeDotJs/> : null}
                </li>
                <li className={classes.tech}>
                    {project.technologies[3]==="mySQL" ? <SiMysql/> : null}
                </li>
                
            </ul>
            : 
            project.technologies.length===5 ? 
            <ul>
                <li className={classes.tech}>
                    {project.technologies[0]==="React js" ? <SiReact/> : null}
                </li>
                <li className={classes.tech}>
                    {project.technologies[1]==="CSS3" ? <SiCss3/> : null}
                </li>
                <li className={classes.tech2}>
                    {project.technologies[2]==="Node js" ? <SiNodeDotJs/> : null}
                </li>
                <li className={classes.tech}>
                    {project.technologies[3]==="mySQL" ? <SiMysql/> : null}
                </li>
                <li className={classes.tech}>
                    {project.technologies[4]==="REST API" ? <img src={rest} alt="" /> : null}
                </li>
            </ul>
            : null }
            <h2 className={classes.links}>Useful Links</h2>
            <div className={classes.information}>
                <div onClick={github}className={classes.source}>
                    <SiGithub/>
                </div>
                <div onClick={youtube} className={classes.youtube}>
                    <SiYoutube/>
                </div>
            </div>
            
        </div>
    )
}
export default SelectedProject