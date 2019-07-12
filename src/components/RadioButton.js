import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import workouts from '../workout';
import RadioButtonChild from './GymFilter'

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

class RadioButton extends React.Component {
  constructor(props) {
    super();
    this.state = {
      goal: 'all',
      filteredWorkouts: workouts,
    };
}

  handleChange = event => {
    this.setState({ goal: event.target.value});
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={"goal"}>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Goal</FormLabel>
            <RadioGroup
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
              defaultValue="all"
            >
              <FormControlLabel 
                value="gain"
                control={<Radio color="primary" />} 
                label="gain" 
              />
              <FormControlLabel 
                value="lose" 
                control={<Radio color="primary" />} 
                label="lose" 
              />
              <FormControlLabel
                value="maintain" 
                control={<Radio color="primary" />} 
                label="maintain" 
              />
              <FormControlLabel
                value="all" 
                control={<Radio color="primary" />} 
                label="all" 
              />
            </RadioGroup>
          </FormControl>
          </div>
        <div className={"gymButton"}>
        <RadioButtonChild goal={this.state.goal}/>
        </div>
      </div>
    );
  }
}

RadioButton.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(RadioButton);    