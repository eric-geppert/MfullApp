import React from 'react';
import { Button } from 'reactstrap';
import Menu from '@material-ui/core/Menu';
import MyPDFDocument from './MyPDFDocument'
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#ecf0f1'
  },
});

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div className="SimpleMenu">
        <View style={styles.container}>
          <Button
            color="primary"
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
            containerviewstyle={{width: '100%', marginLeft: 1000}}
            // containerViewStyle={{width: '100%', marginLeft: 1000}}
          >
            {this.props.name}
          </Button>
        </View>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
        <MyPDFDocument pages={this.props.pages} testKey={this.props.test} file={this.props.file}/>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;