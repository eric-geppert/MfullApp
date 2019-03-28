import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
      value: ''
    };
}

  handleChange = event => { //take out if below func works
    // this.setState({ value: event.target.value },() => 
    this.state.value= event.target.value;
    console.log('new state', this.state);
  };

  // setValueState = (e, item) => {
  //   e.preventDefault();
  //   this.setState({
  //     value: item.value,
  //     ...item
  //   }, () => {
  //     alert(JSON.stringify(this.state))
  //     console.log(this.state)
  //   })
  // };

  OnRadioButtonUpdate(){
    //   console.log("this.props.state.value before:", this.props.state.value)
      this.props.UpdateButton(this.state.value);
      console.log(this.state.value)
      // console.log("this.props.state.value after:", this.props.UpdateButton(this.state.value))
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">Goal</FormLabel>
          <RadioGroup
            // aria-label="goal"
            // name="goal1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}//---------------------
            // onChange={(event) => this.setValueState(event)}
            // onClick={this.OnRadioButtonUpdate.bind(this)}
            // onClick={this.handleChange} // add back after
            // onClick={this.props.triggerParentUpdate}
          >
            <FormControlLabel 
              value="gain"
              control={<Radio color="primary" />} 
              label="gain" 
              onClick={this.OnRadioButtonUpdate.bind(this)}
              // onClick={this.OnRadioButtonGain.bind(this)}
            />
            <FormControlLabel 
              value="lose" 
              control={<Radio color="primary" />} 
              label="lose" 
              onClick={this.OnRadioButtonUpdate.bind(this)}
            />
            <FormControlLabel
              value="maintain" 
              control={<Radio color="primary" />} 
              label="maintain" 
              onClick={this.OnRadioButtonUpdate.bind(this)}
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

RadioButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButton);