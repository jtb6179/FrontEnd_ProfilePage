import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import  facePic  from './image/profile_picture_4_profile_website.jpg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Backdrop from '@material-ui/core/Backdrop';
import {Grow} from '@material-ui/core';
import {
  FacebookShareButton,
  FacebookIcon,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
} from 'react-share';
import JobsLayout  from "./JobsLayout";

const CardStyles = makeStyles({
  root: {
    maxWidth: 745,
  },
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © : brought to you by M.E.R.N Stack. ' }
      <Link color="inherit" href="https://material-ui.com/">
        Storm Inc. 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 400;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  media: {
    height: 500,
    // paddingTop: '56.25%', // 16:9,
    // marginTop:'30'
      },
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
  
}));

 function ProfileInfo(props) {
  const classes = useStyles();
  const cardClasses = CardStyles();
  const [open, setOpen] = React.useState(true);
  // const { isModalOpen, openModal, closeModal } = useModal();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);                                                                                      
  };
 
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color='secondary' position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
        
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
          
            <MenuIcon />
          </IconButton>
          <Typography style={{fontFamily: "Georgia, serif"}} component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Joel's Profile
          </Typography>
          <IconButton color="inherit">
            {/*<Badge badgeContent={1} color="secondary">
                  <NotificationsIcon />
                </Badge> */}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <Card className={cardClasses.root}>
              <CardActionArea>
                <CardMedia
                  style={{height: 500, width: 340}}
                  image={facePic}
                />
                  <CardContent>
                  <Typography gutterBottom 
                  variant="h5" component="h2">
                    Software Developer
                  </Typography>
                  <Card 
                  style={{maxWidth: 320}}
                  >
                    <Typography
                    style={{whiteSpace: 'pre-line'}}
                     variant="body1" color="textSecondary" 
                     >
                    Experienced in Ruby on Rails and JavaScript-based programming with a background in Packaging Engineering 
                    (package design conceptualization to product placement and manufacturing). Possess strong skills in team-building, 
                    project management, leadership, agile in learning new things, and creativity that helped to cultivate a positive environment, 
                    which drove an increase in both consumer base and team productivity.
                    </Typography>
                  </Card>
                </CardContent>
              </CardActionArea>
              <CardActions>
              </CardActions>
            </Card>
          </IconButton>
        </div>
              </Drawer>
            <ChevronLeftIcon />
        <Divider />
        {/* <List>{mainListItems}</List> */}
        <Divider />
        {/* <List>{secondaryListItems}</List> */}
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <JobsLayout/>
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {/* <Orders /> */}
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
            <FormControlLabel
              control={
                <Button size="small" color="primary" checked={checked} onClick={handleChange}>
                        Share
                </Button>
                }
              />
              <Grow
                in={checked}
              >
              <Grid item xs={3} md={3} >
                <Paper elevation={4} className={classes.paper}>
                <Grid item xs={3} md={3}>
                  <FacebookShareButton url={"http://localhost:3000/"}> 
                    <FacebookIcon size={36} />
                    </FacebookShareButton>
                    <TwitterShareButton url={"http://localhost:3000/"}>
                      <TwitterIcon  size={36} />
                    </TwitterShareButton>
                    <LinkedinShareButton url={"http://localhost:3000"}>
                    <LinkedinIcon size={36}/>
                  </LinkedinShareButton>
                  </Grid>
                </Paper>
              </Grid>
            </Grow>
          <Button size="small" color="primary" >
            Contact Me
          </Button>
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default ProfileInfo;