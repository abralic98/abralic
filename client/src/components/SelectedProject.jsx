import classes from "./SelectedProject.module.css"
import { ProjectContext } from "../context/ProjectContext"
import { useContext, useState, useEffect } from "react"
import Navigation from "./Navigation"
const SelectedProject = () =>{
    const {projects} = useContext(ProjectContext)
    const [project,setProject] = projects
    const [desc,setDesc] = useState([])
    useEffect(()=>{
        for (let i = 0; i<project.description.length; i++){
            setDesc((prev)=>{
                return prev=[...prev,project.description[i]]
            })
        }
    },[])
    
    return (
        <div className={classes.background}>
            <Navigation/>
            <h1>{project.name}</h1>
            {project.description.length===2 ? 
            <p className={classes.description}>{project.description[0]} <br/><br/> {project.description[1]}</p> : 
            <p className={classes.description}>{project.description[0]} <br/><br/> {project.description[1]} <br/><br/> {project.description[2]} <br/><br/> {project.description[3]}</p>}
            <h2>Technologies</h2>
            {project.technologies.length===3 ? 
            <ul>
                <li>
                    {project.technologies[0]}
                </li>
                <li>
                    {project.technologies[1]}
                </li>
                <li>
                    {project.technologies[2]}
                </li>
            </ul> : 
            <ul>
                <li>
                    {project.technologies[0]}
                </li>
                <li>
                    {project.technologies[1]}
                </li>
                <li>
                    {project.technologies[2]}
                </li>
                <li>
                    {project.technologies[3]}
                </li>
                <li>
                    {project.technologies[4]}
                </li>
                
            </ul>}
            
            <div>
                <div className={classes.source}>
                    
                </div>
                <div className={classes.pages}>
                    
                </div>
            </div>
            
        </div>
    )
}
export default SelectedProject