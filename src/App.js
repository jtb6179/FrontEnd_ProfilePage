import './App.css';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
import ProfileInfo from '../src/components/ProfileInfo'
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ ProfileInfo }/>
      </Switch>
       {/* <Grid container>
        <Grid item xs={10}>
          <Paper>xs=12</Paper>
        </Grid>
        </Grid> */}
      
    </div>
  );
}

export default App;
