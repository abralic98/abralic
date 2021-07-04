import classes from "./Navigation.module.css"
import { ProjectContext } from "../context/ProjectContext"
import {useContext} from "react"
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
            history.replace("/home")
        }else{
            setProject((prev)=>{
                return{
                    name:prev.name=""
                }
            })
            history.replace(`/${currentNav}`)
        }
    }
    return (
        <div className={classes.navigation}>
            <p className={classes.pa}onClick={()=>link(0)}>Ante</p>
            <p>{">"}</p>
            <p className={classes.pa} onClick={()=>link(1)}>{currentNav}</p>
            {project.name!=="" ? <p>{">"}</p> : null}
            <p className={classes.pa}>{project.name}</p>
        </div>
    )
}
export default Navigation