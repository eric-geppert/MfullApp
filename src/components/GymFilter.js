import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import workouts from '../workout';
import GymFilter from './DaysFilter';

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
        gym: 'all',
        filteredWorkouts: workouts,
    }; 
}


  handleChange = event => {
        this.setState({ gym: event.target.value});
  };

  render() {
    const { classes } = this.props;
    //child filters partent (goals)
    // let temp=workouts.filter(workout =>(this.props.goal===workout.goal)||(this.props.goal==="all"));
    // var filteredWorkouts=temp;

    return (
      <div className={classes.root}>
        {/* , */}
        {/* alignSelf: "center" only aligns down some not over, 
          other aligns dont work */}
        <div className="gym" style={{paddingLeft: "30%", paddingRight: "10%"}}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Gym</FormLabel>
            <RadioGroup
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
              defaultValue="all"
            >
              <FormControlLabel 
                value="AtHomeTotalBody"
                control={<Radio color="primary" />} 
                label="At Home Total Body" 
              />
              <FormControlLabel 
                value="ConditioningWeightLoss" 
                control={<Radio color="primary" />} 
                label="Conditioning Weight Loss" 
              />
              <FormControlLabel
                value="FunctionalFitnessHIIT" 
                control={<Radio color="primary" />} 
                label="Functional Fitness HIIT" 
              />
              <FormControlLabel
                value="TotalBodyTransformation" 
                control={<Radio color="primary" />} 
                label="Total Body Transformation" 
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
           <GymFilter filteredWorkoutList={this.state.filteredWorkouts} gym={this.state.gym}/>
        </div>
      </div>
    );
  }
}

RadioButtonChild.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(RadioButtonChild);    