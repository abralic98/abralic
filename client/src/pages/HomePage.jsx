import background from "../images/backgroundx.png"
import classes from "./HomePage.module.css"
import { useRef } from  "react"
import {Link} from "react-router-dom"
const HomePage = () =>{
    const helloRef = useRef();
    const iAmRef = useRef();
    const nameRef = useRef();
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
    return (
        <div>
            <div className={classes.background}></div>
            <div className={classes.backgroundOpacity}></div>
            <img className={classes.img}src={background} alt="" />
            
            <div className={classes.introduction}>
                <div className={classes.linkBlock}>
                    <Link to="/about"><h1 onMouseOver={helloTransform} onMouseLeave={helloTransformBack} ref={helloRef}>Hello</h1></Link>
                </div>
                <div className={classes.linkBlock}>
                    <Link to="/projects"><h1 onMouseOver={iAmTransform} onMouseLeave={iAmTransformBack} ref={iAmRef}>I am</h1></Link>
                </div>
                <div className={classes.linkBlock}>
                    <Link to="/contact"><h1 onMouseOver={nameTransform} onMouseLeave={nameTransformBack} ref={nameRef}>Ante</h1></Link> 
                </div>
            </div>
            
        </div>
    )
}

export default HomePage;