import background from "../images/bradakek.png"
import classes from "./HomePage.module.css"
import { useRef, useContext, useState } from  "react"
import {Link} from "react-router-dom"
import { ProjectContext } from "../context/ProjectContext"
const HomePage = () =>{
    const helloRef = useRef();
    const iAmRef = useRef();
    const nameRef = useRef();
    const link1 = useRef();
    const link2 = useRef();
    const link3 = useRef();

    const {navigation, projects} = useContext(ProjectContext);
    const [currentNav,setCurrentNav] = navigation;
    const [project,setProject] = projects;
    const [className, setClassName] = useState(classes.linkBlock)
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
            setProject((prev)=>{
                return {
                    name:prev.name=""
                }
            })
        }
        if(number===1){
            setCurrentNav((prev)=>prev="projects")
            setProject((prev)=>{
                return {
                    name:prev.name=""
                }
            })
        }
        if(number===2){
            setCurrentNav((prev)=>prev="contact")
            setProject((prev)=>{
                return {
                    name:prev.name=""
                }
            })
        }
    }
    function refresh(){
        if(className===classes.linkBlock){
            setClassName((prev)=>prev=classes.nothing);
            setTimeout(linkClass,100)
        }
    }
    function linkClass(){
        setClassName((prev)=>prev=classes.linkBlock)
    }
    return (
        <div onClick={refresh}className={classes.background}>
            <div className={classes.backgroundOpacity}></div>
            <div className={classes.homeFlexBox}>
                <div className={classes.introduction}>
                    <div ref={link1} onClick={()=>handleNavigation(0)} className={className}>
                        <Link to="/about"><h1 onMouseOver={helloTransform} onMouseLeave={helloTransformBack} ref={helloRef}>Hello</h1></Link>
                    </div>
                    <div ref={link2} onClick={()=>handleNavigation(1)} className={className}>
                        <Link to="/projects"><h1 onMouseOver={iAmTransform} onMouseLeave={iAmTransformBack} ref={iAmRef}>I am</h1></Link>
                    </div>
                    <div ref={link3} onClick={()=>handleNavigation(2)} className={className}>
                        <Link to="/contact" ><h1 onMouseOver={nameTransform} onMouseLeave={nameTransformBack} ref={nameRef}>Ante</h1></Link> 
                    </div>
                </div>
                <img className={classes.img}src={background} alt="" />
            </div>
            <p className={classes.tap}>Tap anywhere</p>
            
        </div>
    )
}

export default HomePage;