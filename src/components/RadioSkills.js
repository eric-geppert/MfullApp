import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Program from '../containers/Program';

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

class RadioDays extends React.Component {
  constructor(props) {
    super();
    this.state = {
        skill: 'all'
    };    
}

  handleChange = event => {
        this.setState({ skill: event.target.value});
  };

  render() {
    const { classes } = this.props;
    //days filter radiochild (child1) gym
    let skillList=this.props.dayList.filter(workout =>(this.props.days===workout.days)||(this.props.days==="all"));
    
    return (
      <div className={classes.root}>
        <div className="skill">
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Skill level</FormLabel>
            <RadioGroup
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
              defaultValue="all"
            >
              <FormControlLabel 
                value="beginner"
                control={<Radio color="primary" />} 
                label="beginner" 
              />
              <FormControlLabel 
                value="intermediate" 
                control={<Radio color="primary" />} 
                label="intermediate" 
              />
              <FormControlLabel
                value="advanced" 
                control={<Radio color="primary" />} 
                label="advanced" 
              />
              <FormControlLabel
                value="all" 
                control={<Radio color="primary" />} 
                label="see all" 
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className={"Program"}>
          <Program skillList={skillList} skill={this.state.skill}/> 
        </div>
      </div>
    );
  }
}

RadioDays.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(RadioDays);    