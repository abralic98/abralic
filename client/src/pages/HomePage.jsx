import background from "../images/bradakek.png"
import classes from "./HomePage.module.css"
import { useRef, useContext } from  "react"
import {Link} from "react-router-dom"
import { ProjectContext } from "../context/ProjectContext"
const HomePage = () =>{
    const helloRef = useRef();
    const iAmRef = useRef();
    const nameRef = useRef();
    const {navigation} = useContext(ProjectContext);
    const [currentNav,setCurrentNav] = navigation;
    function helloTransform(){
        helloRef.current.innerHTML="About"
    }
    function iAmTransform(){
        iAmRef.current.innerHTML="Projects" 
    }
    function nameTransform(){
        nameRef.current.innerHTML="Contact" 
    }
    function helloTransformBack(){
        helloRef.current.innerHTML="Hello" 
    }
    function iAmTransformBack(){
        iAmRef.current.innerHTML="I am" 
    }
    function nameTransformBack(){
        nameRef.current.innerHTML="Ante" 
    }
    function handleNavigation(number){
        if(number===0){
            setCurrentNav((prev)=>prev="about")
        }
        if(number===1){
            setCurrentNav((prev)=>prev="projects")
        }
        if(number===2){
            setCurrentNav((prev)=>prev="/contact")
        }
    }
    return (
        <div>
            <div className={classes.background}></div>
            <div className={classes.backgroundOpacity}></div>
            <img className={classes.img}src={background} alt="" />
            
            <div className={classes.introduction}>
                <div onClick={()=>handleNavigation(0)}className={classes.linkBlock}>
                    <Link to="/about"><h1 onMouseOver={helloTransform} onMouseLeave={helloTransformBack} ref={helloRef}>Hello</h1></Link>
                </div>
                <div onClick={()=>handleNavigation(1)} className={classes.linkBlock}>
                    <Link to="/projects"><h1 onMouseOver={iAmTransform} onMouseLeave={iAmTransformBack} ref={iAmRef}>I am</h1></Link>
                </div>
                <div onClick={()=>handleNavigation(2)} className={classes.linkBlock}>
                    <Link to="/contact"><h1 onMouseOver={nameTransform} onMouseLeave={nameTransformBack} ref={nameRef}>Ante</h1></Link> 
                </div>
            </div>
            
        </div>
    )
}

export default HomePage;