import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar as MuiAppBar, Typography, Toolbar } from '@material-ui/core';

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  }
});

class AppBar extends Component {
  render() {
    const { classes } = this.props;

    return (
      <MuiAppBar
        position="fixed"
        className={classes.appBar}
        >
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap>
            React
          </Typography>
        </Toolbar>
      </MuiAppBar>
    );
  }
}

export default withStyles(styles)(AppBar);
