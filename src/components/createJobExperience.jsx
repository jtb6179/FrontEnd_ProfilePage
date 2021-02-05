import React, { Component } from 'react'
import TextField from "@material-ui/core/TextField"
import List from "@material-ui/core/List"
import Grid from "@material-ui/core/Grid"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import PublishIcon from '@material-ui/icons/Publish';
import {Button} from "@material-ui/core"

export class createJobExperience extends Component {
    
    state = { 
        position: "",
        company: "",
        description: "",
    }

    SubmitHandler = (jobObj) => {
      console.log(jobObj);
      // debugger
      fetch('http://localhost:4000/jobsExperience/addJobExperience', {
      method: 'POST',
      headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
      }, 
      body: JSON.stringify(jobObj)
    })
    .then(res => res.json())
    .then(newData => {
      this.props.addOneJob(newData)
      console.log(newData);
    })
    // this.props.history.push('/')
  }
  
  handleChange = (event) => {
        //omg
        console.log(event.target.name)
        // event.preventDefault()
        let {name} = event.target
        this.setState({
          [name]: event.target.value
        })
    }

    render() {

      let {position, company, description} = this.state

        return (
            <div>
            <AppBar color='secondary'>
                  <Toolbar>
                    <Typography style={{fontFamily: "Georgia, serif"}}> Add Job Experiences</Typography>
                  </Toolbar>
                </AppBar>
                <form onSubmit={this.SubmitHandler} className="App-logo" noValidate autoComplete="off">
                  <List>
                    <TextField 
                        ref={company => this.company = company}
                        name="company" id="outlined-basic" 
                        label="Company" variant="outlined" 
                        type="text"
                        onChange={this.handleChange} 
                        value={company}
                        />
                  </List>
                  <Grid item>
                    <TextField 
                        ref={position => this.position = position}
                        name="position" id="outlined-basic" 
                        label="Position" variant="outlined" 
                        type="text"
                        onChange={this.handleChange}
                        value={position}
                        />
                  </Grid>
                    
                  <Grid item>
                    <TextField
                      id="standard-multiline-static"
                      label="Description"
                      name="description"
                      multiline
                      type="text"
                      rows={6}
                      size="medium"
                      value={description}
                      ref={description => this.description = description}
                      onChange={this.handleChange}
                      />
                  </Grid>
                  <hr/>
                    <Button
                    variant="contained"
                    color="secondary" 
                    type="submit"
                    startIcon={<PublishIcon />}
                    // onSubmit={handleSubmit}
                    > Submit </Button>
                </form>
            </div>
        )
    }
}

export default createJobExperience
