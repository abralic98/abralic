import classes from "./ProjectBlock.module.css"
import balkanFlix from "../images/balkanflix.png"
import { useHistory } from "react-router-dom"
import { useContext } from "react" 
import { ProjectContext } from "../context/ProjectContext"
const ProjectBlock = (projectData) =>{
    const history = useHistory();
    const {projects} = useContext(ProjectContext)
    const [project,setProject] = projects
    const images = [
        "https://www.wallpaperflare.com/static/871/312/888/mercedes-amg-c-63-s-cabriolet-nyias-2016-white-wallpaper.jpg",
        "https://cdn.wallpapersafari.com/29/11/mw5tCD.jpg",
        "https://cdn.kimkim.com/files/a/content_articles/featured_photos/f21821b56779ee07d34c654485facbf41f6cbd6f/big-b8d1c62f808e75dd2eca85616fdef999.jpg",
        balkanFlix
    ]
    function redirect(number){
        if(number===0){
            setProject((prev)=>{
                return{
                    name: prev.name = projectData.projectData.name,
                    description: prev.description = projectData.projectData.description,
                    id: prev.id = projectData.projectData.id,
                    technologies: prev.technologies = projectData.projectData.technologies,
                    sourceLink: prev.sourceLink = projectData.projectData.sourceLink,
                    githubPages: prev.githubPages = projectData.projectData.githubPages,
                    youtube: prev.youtube = projectData.projectData.youtube
                }
            })
            window.scroll(0,0)
            history.replace("/projects/carshop")
        }
        if(number===1){
            setProject((prev)=>{
                return{
                    name: prev.name = projectData.projectData.name,
                    description: prev.description = projectData.projectData.description,
                    id: prev.id = projectData.projectData.id,
                    technologies: prev.technologies = projectData.projectData.technologies,
                    sourceLink: prev.sourceLink = projectData.projectData.sourceLink,
                    githubPages: prev.githubPages = projectData.projectData.githubPages,
                    youtube: prev.youtube = projectData.projectData.youtube
                }
            })
            window.scroll(0,0)
            history.replace("/projects/katanashop")
        }
        if(number===2){
            setProject((prev)=>{
                return{
                    name: prev.name = projectData.projectData.name,
                    description: prev.description = projectData.projectData.description,
                    id: prev.id = projectData.projectData.id,
                    technologies: prev.technologies = projectData.projectData.technologies,
                    sourceLink: prev.sourceLink = projectData.projectData.sourceLink,
                    githubPages: prev.githubPages = projectData.projectData.githubPages,
                    youtube: prev.youtube = projectData.projectData.youtube
                }
            })
            window.scroll(0,0)
            history.replace("/projects/meetings")
        }
        if(number===3){
            setProject((prev)=>{
                return{
                    name: prev.name = projectData.projectData.name,
                    description: prev.description = projectData.projectData.description,
                    id: prev.id = projectData.projectData.id,
                    technologies: prev.technologies = projectData.projectData.technologies,
                    sourceLink: prev.sourceLink = projectData.projectData.sourceLink,
                    githubPages: prev.githubPages = projectData.projectData.githubPages,
                    youtube: prev.youtube = projectData.projectData.youtube
                }
            })
            window.scroll(0,0)
            history.replace("/projects/balkanflix")
        }
    }
    return (
        <div onClick={()=>redirect(projectData.projectData.id)}className={classes.background}>
            <div className={classes.opacity}></div>
            <img src={images[projectData.projectData.id]} alt="" />
            <h2>{projectData.projectData.name}</h2>
        </div>
    )
}
export default ProjectBlock