import {createContext, useState} from "react";


export const ProjectContext = createContext();

export const ProjectContextP = (props)=>{
    const [project,setProject] = useState({
        name:"",
        description:"",
        id:"",
        technologies:"",
        sourceLink:"",
        githubPages:""
    })

    const [currentNav,setCurrentNav] = useState();
    const [refresh,setRefresh] = useState(false)

    return (
        <ProjectContext.Provider value={{
            projects:[project,setProject],
            navigation:[currentNav,setCurrentNav],
        }}>
            {props.children}
        </ProjectContext.Provider>
    )
}
