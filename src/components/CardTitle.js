import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  titlePage: {
    color: 'rgb(97, 97, 97)',
    fontSize: 16,
    fontWeight: 400,
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
})

class CardTitle extends Component {
  render() {
    const { classes, children } = this.props;

    return (
      <Typography
        spacing={5}
        className={classes.titlePage}
        >
        {children}
      </Typography>
    );
  }
}

export default withStyles(styles)(CardTitle);
