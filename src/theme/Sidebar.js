import React, { Component } from 'react';
import { Drawer, List } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import routes from '../routes';
import SidebarLink from './SidebarLink';

const drawerWith = 300;

const styles = theme => ({
  drawer: {
    width: drawerWith,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWith,
  },
  toolbar: theme.mixins.toolbar,
});

class Sidebar extends Component {
  renderSidebarItem = (route, index) => <SidebarLink key={index} route={route}/>

  render() {
    const { classes } = this.props;

    return (
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{ paper: classes.drawerPaper }}
        >
        <div className={classes.toolbar} />
        <List component="nav">
          {routes.map(this.renderSidebarItem)}
        </List>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
