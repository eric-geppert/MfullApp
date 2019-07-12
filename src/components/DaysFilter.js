import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import RadioSkills from './RadioSkills';
import Program from '../containers/Program';
import './DaysFilter.css';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class GymFilter extends React.Component {
  constructor(props) {
    super();
    this.state = {
        days: 'all'
    };    
}

  handleChange = event => {
        this.setState({ days: event.target.value});
  };

  render() {
    const { classes } = this.props;
    //days filter radiochild (child1) gym
    let dayList=this.props.filteredWorkoutList.filter(workout =>(this.props.gym===workout.gym)||(this.props.gym==="all"));
    
    return (
      // className={classes.root}
      <div >
        <div className="days">
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Days/week</FormLabel>
            <RadioGroup
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
              defaultValue="all"
            >
              <FormControlLabel 
                value="5"
                control={<Radio color="primary" />} 
                label="5" 
              />
              <FormControlLabel 
                value="4" 
                control={<Radio color="primary" />} 
                label="4" 
              />
              <FormControlLabel
                value="3" 
                control={<Radio color="primary" />} 
                label="3" 
              />
              <FormControlLabel
                value="all" 
                control={<Radio color="primary" />} 
                label="see all" 
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="skills">
            {/* <RadioSkills dayList={dayList} days={this.state.days}/> */}
            <Program dayList={dayList} days={this.state.days}/>
        </div>
      </div>
    );
  }
}

GymFilter.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(GymFilter);    