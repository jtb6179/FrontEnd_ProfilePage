import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Modal from 'react-awesome-modal';
import { Button, Grid } from "@material-ui/core"
import List from '@material-ui/core/List';
import {useForm} from "react-hook-form"
import { useHistory } from "react-router-dom"
// import ExperienceCard  from "./ExperienceCard";
import CreateJobExperience  from "./createJobExperience";
import JobsContainer from "./JobsContainer"


export function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >{
          value === index && ( 
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  formStyles: {
    marginTop: 80,
    // margin: `${theme.spacing(10)}px auto`,
    // padding: theme.spacing(2),
  },
}));

export default function JobsLayout() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [items, setItems] = useState([])
  const history =  useHistory()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  const addOneJob = (jobObj) => {
    setItems([...items, jobObj])
    console.log(items);
}

  const [isToggled, setToggled] = useState(false);

  // const toggleTrueFalse = () => setToggled(!isToggled);
  

  const handleButton = (event) => {
      // console.log("Herro")
      setToggled(!isToggled)
    }
    

  return (
    <div className={classes.root}>

    <Fab  size="medium" color="secondary" aria-label="add">
        <AddIcon onClick={handleButton} />
          <Modal 
              visible={isToggled}
              width="700"
              height="500"
              effect="fadeInUp"
                >
                
                <CreateJobExperience 
                // submitHandler={SubmitHandler} items={items}
                addOneJob={addOneJob}
                />
                <List>
                  
                </List>
                <Button  
                  onClick={handleButton}
                  >
                  Close
                </Button>
          </Modal>
            

    </Fab>

      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        >
        <JobsContainer jobs={items} change={handleChange} value={value} />
      {/* <TabPanel value={value} index={0}>
        Item One
      </TabPanel> */}
        {/* <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      
      
      {/* <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel> */}
    </div>
  )}