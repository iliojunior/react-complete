import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

import withTheme from '../theme/withTheme';
import AppBar from '../theme/AppBar';
import Sidebar from '../theme/Sidebar';
import MainContent from '../theme/MainContent';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
})

class LayoutProvider extends Component {
  render() {
    const { classes } = this.props;

    return (
      <BrowserRouter>
        <div className={classes.root}>
          <AppBar />
          <Sidebar />
          <MainContent />
        </div>
      </BrowserRouter>
    );
  }
}

const componentWithStyles = withStyles(styles)(LayoutProvider);

export default withTheme(componentWithStyles);
