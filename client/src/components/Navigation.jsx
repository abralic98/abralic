import classes from "./Navigation.module.css"
import { ProjectContext } from "../context/ProjectContext"
import { useContext } from "react"
import { useHistory } from "react-router"
const Navigation = () =>{
    const history = useHistory()
    const {navigation,projects} = useContext(ProjectContext);
    const [currentNav,setCurrentNav] = navigation;
    const [project,setProject] = projects
    
    
    function link(number){
        if(number===0){
            setProject((prev)=>{
                return{
                    name:prev.name=""
                }
            })
            history.replace("/")
        }
        if(number===1){
            setProject((prev)=>{
                return{
                    name:prev.name=""
                }
            })
            history.replace(`/${currentNav}`)
        }
    }
    console.log(currentNav)
    return (
        <div className={classes.navigation}>
            <p className={classes.pa}onClick={()=>link(0)}>Ante</p>
            <p>{">"}</p>
            <p className={classes.pa} onClick={()=>link(1)}>{currentNav}</p>
            {project.name!=="" && currentNav==="projects" ? <p>{">"}</p> : null}
            {currentNav==="projects"  ? <p className={classes.pa}>{project.name}</p> : null}
        </div>
    )
}
export default Navigation