// import jobExperience from "../../models/jobExperience"

export const getProject = () => fetch("http://localhost:4000/projects")
    .then(res => res.json())

export const getJobsExperience = () => fetch("http://localhost:4000/jobsExperience")
    .then(res => res.json())

export const addJobExperience = (jobExperience) => fetch('http://localhost:4000/addJobExperience', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(jobExperience)
            })
            
export const addProjects = (Project) => fetch('http://localhost:4000/addProjects', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(Project)

            })