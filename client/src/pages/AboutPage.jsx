import classes from "./AboutPage.module.css"
import Navigation from "../components/Navigation"
import arrow from "../images/arrowDown.png"
import {Link} from "react-router-dom"
import { useContext } from "react";
import { ProjectContext, ProjectContextP } from "../context/ProjectContext";
const AboutPage = () =>{
    const {navigation} = useContext(ProjectContext);
    const [currentNav,setCurrentNav] = navigation;

    function projects(){
        setCurrentNav((prev)=>prev="projects")
        window.scroll(0,0)
    }
    function aboutMe(){
        window.scrollTo({
            top: 1500,
            behavior: "smooth"
          });
    }
    return (
        <div className={classes.background}>
            <Navigation/>
            <div className={classes.titleBlock}>
                <h1>I design {"&"} build user interfaces </h1>
            </div>
            <div onClick={aboutMe} className={classes.showMore}>
                <img src={arrow} alt="" />
                <p>More About Me</p>
            </div> 
            <div className={classes.about}>
                <h1>About</h1>
                <h2>Hi I'm Ante. I'm Frontend software developer</h2>
                <p>I always look myself as a person who defines the work by quality and efficiency. 
                    Skills can be mastered, personality is inherent. Every task I perform is another ladder of experience I gain. 
                    My goals are to keep challenging myself, going far beyond the borders of my knowledge and do interesting things that matter.</p>
                <p>
                I enjoy taking complex problems and turning them into simple and beautiful interface designs. 
                I also love the logic and structure of coding and always strive to write elegant and efficent code.
                </p>
                <p>My abundant energy fuels me in pursuit of interests.
                   I'm a fast learner, able to pick up new skills and create projects with relative ease.
                </p>
                <h2>Technologies I know</h2>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>React js</li>
                    <li>Node js</li>
                    <li>MySQL</li>
                </ul>
                <Link to="/projects"> <h2 onClick={projects} className={classes.link}>Want to check my projects?</h2> </Link>
            </div>
            
        </div>
    )
}

export default AboutPage