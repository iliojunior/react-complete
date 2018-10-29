import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import routes from '../routes';

const styles = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  toolbar: theme.mixins.toolbar,
});

class MainContent extends Component {
  renderRouteItem = (route, index) => (
    <Route
      exact
      key={index}
      path={route.path}
      component={route.component}
      />
  );

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {routes.map(this.renderRouteItem)}
      </main>
    );
  }
}

export default withStyles(styles)(MainContent);
