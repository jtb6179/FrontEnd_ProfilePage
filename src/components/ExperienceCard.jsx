
import React from 'react'
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { TabPanel } from "./JobsLayout"

function ExperienceCard(props) {
    // const classes = useStyles();
    
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
    return (
        <div>
            <Tab label={props.job.company} {...a11yProps(0)} />
                <TabPanel value={props.value} index={0}>
                    {props.job.description}
                </TabPanel>
        </div>
    )
}

export default ExperienceCard

