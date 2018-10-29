import React, { Component } from 'react';
import { object } from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

const styles = () => ({
  activeLink: {
    backgroundColor: 'rgba(0, 0, 0, .1)',
  },
});

class SidebarLink extends Component {
  static propTypes = {
    route: object.isRequired,
  }

  render() {
    const { route, index, classes } = this.props;
    const TagIcon = route.icon;

    return (
      <ListItem
        component={NavLink}
        activeClassName={classes.activeLink}
        to={route.path}
        key={index}
        button
        exact
        >
        <ListItemIcon>
          <TagIcon />
        </ListItemIcon>
        <ListItemText primary={route.text} />
      </ListItem>
    );
  }
}

export default withStyles(styles)(SidebarLink);
