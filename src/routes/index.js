import HomeIcon from '@material-ui/icons/Home'
import ListIcon from '@material-ui/icons/List'

import HomePage from '../app/Home';
import TodoTableView from '../app/Todo/TableView';

export default [
  {
    path: "/",
    text: "Home",
    exact: true,
    icon: HomeIcon,
    component: HomePage
  },
  {
    path: "/todo",
    text: "To Do",
    exact: true,
    icon: ListIcon,
    component: TodoTableView
  }
];
