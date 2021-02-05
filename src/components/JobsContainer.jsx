import React, { Component } from 'react'
import ExperienceCard  from "./ExperienceCard";

export class JobsContainer extends Component {

    state = {
        jobs: [],
    }

    componentDidMount() {
        fetch("http://localhost:4000/jobsExperience")
            .then(res => res.json())
            .then( data => {
                this.setState({
                    jobs: data
                })
            })
        }

    render() {
        let jobsArray = this.props.jobs.map((aJob)=> {
            return <ExperienceCard key={aJob.id} 
                                                    job={aJob} change={this.props.change} 
                                                    value={this.props.value} />
        })
        return (
            <div>
                {jobsArray}
            </div>
        )
    }
}

export default JobsContainer
