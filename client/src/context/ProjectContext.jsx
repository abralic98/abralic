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

    return (
        <ProjectContext.Provider value={{
            projects:[project,setProject]
        }}>
            {props.children}
        </ProjectContext.Provider>
    )
}
