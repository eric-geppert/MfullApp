import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import workouts from '../workout';
import RadioDays from './RadioDays';

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

class RadioButtonChild extends React.Component {
  constructor(props) {
    super();
    this.state = {
        gym: 'all'
    }; 
}


  handleChange = event => {
        this.setState({ gym: event.target.value});
  };

  render() {
    const { classes } = this.props;
    //child filters partent (goals)
    let temp=workouts.filter(workout =>(this.props.goal===workout.goal)||(this.props.goal==="all"));
    var filteredWorkouts=temp;

    return (
      <div className={classes.root}>
        <div className="gym">
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Gym</FormLabel>
            <RadioGroup
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
              defaultValue="all"
            >
              <FormControlLabel 
                value="crossfit"
                control={<Radio color="primary" />} 
                label="crossfit" 
              />
              <FormControlLabel 
                value="weightlifting" 
                control={<Radio color="primary" />} 
                label="weightlifting" 
              />
              <FormControlLabel
                value="notCrossfit" 
                control={<Radio color="primary" />} 
                label="notCrossfit" 
              />
              <FormControlLabel
                value="all" 
                control={<Radio color="primary" />} 
                label="all" 
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={"Program"}>
           <RadioDays filteredWorkoutList={filteredWorkouts} gym={this.state.gym}/>
        </div>
      </div>
    );
  }
}

RadioButtonChild.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(RadioButtonChild);    