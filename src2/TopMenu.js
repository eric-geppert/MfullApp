import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SwipeableViews from 'react-swipeable-views-native';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
// import Zoom from '@material-ui/core/Zoom';
// import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
// import EditIcon from '@material-ui/icons/Edit';
import DownIcon from '@material-ui/icons/KeyboardArrowDown';
import green from '@material-ui/core/colors/green';
import SimpleMenu from './SimpleMenu'
import ListItemComposition from './ListItemComposition';
import './TopMenu.css'


function TabContainer(props) {
  const { children, dir } = props;

  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};
const Mstyle = { //fix later?
  // flex: 1,
  // position: 'absolute',
  // top: 0,
  // left:0,
  // background: "lightBlue",
  // flex: 1,
  // alignItems: 'left',
  // justifyContent: 'left',
  // backgroundColor: '#c0392b',

};

const styles = theme => ({
  root: {
    // height: 800
    // backgroundColor: theme.palette.background.paper, //take out root styling??
    flex: 1

    //------------------------
    // height: 100

  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
});

class TopMenu extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;
    // const transitionDuration = {
    //   enter: theme.transitions.duration.enteringScreen,
    //   exit: theme.transitions.duration.leavingScreen,
    // };

    return (
      <div id="AppbarBody" className={classes.root}>
        <AppBar position="static" color="default">
          {/* <SimpleMenu/> 
          //added */}
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab label="Crossfit"/>
            <Tab label="not Crossfit" />
            <Tab label="also not Crossfit" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <div style={Mstyle}>
            
              <SimpleMenu  />
              {/* <ListItemComposition/> */}
              {/* <view style={right}> */}
              <DownIcon/>
              {/* </view> */}
            </div>
            {/* /////////////////////////////////////////////////------------ */}
            {/* <p>blahhh</p> */}
          </TabContainer>
          <TabContainer dir={theme.direction}>Item Two</TabContainer>
          <TabContainer dir={theme.direction}>Item Three</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

TopMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TopMenu);