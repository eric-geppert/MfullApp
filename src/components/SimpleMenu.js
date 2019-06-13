import React from 'react';
import { Button } from 'reactstrap';
import Menu from '@material-ui/core/Menu';
import MyPDFDocument from './MyPDFDocument'

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
          <Button
            color="primary"
            aria-owns={anchorEl ? 'simple-menu' : undefined}
            aria-haspopup="true"
            onClick={this.handleClick}
          >
            {this.props.name}
          </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
        <MyPDFDocument file={this.props.file}/>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;