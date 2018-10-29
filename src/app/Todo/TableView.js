import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardContent, TextField, Button, Grid, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';

import * as todoActions from '../../store/actions/todos';
import CardTitle from '../../components/CardTitle';

const styles = theme => ({
  container: {
    display: 'flex',
  },
  input: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  spacer: {
    flex: 1,
  },
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  titleCell: {
    width: '30%',
  },
});

class TableView extends Component {
  state = {
    title: '',
    description: '',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, description } = this.state;

    this
      .props
      .addTodo(title, description);

    this.clearNewTodo();
  };

  handleFieldChange = ({ target }) => {
    const fieldName = target.name;
    
    this.setState({
      [fieldName]: target.value,
    });
  };

  clearNewTodo = () => {
    this.setState({
      title: '',
      description: '',
    });
  };

  renderTableRow = (todo, index) => {
    const { classes } = this.props;
    return (
      <TableRow key={index}>
        <TableCell className={classes.titleCell}>{todo.title}</TableCell>
        <TableCell>{todo.description}</TableCell>
      </TableRow>
    );
  }

  render() {
    const { classes, todos } = this.props;

    return (
      <div>
        <CardTitle>
          Nova Tarefa
        </CardTitle>
        <Card>
          <CardContent>
            <form onSubmit={this.handleSubmit}>
              <Grid container spacing={24}>
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    name="title"
                    label="Título"
                    className={classes.input}
                    onChange={this.handleFieldChange}
                    value={this.state.title}
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    fullWidth
                    name="description"
                    label="Descrição"
                    className={classes.input}
                    onChange={this.handleFieldChange}
                    value={this.state.description}
                  />
                </Grid>
              </Grid>

              <Grid container>
                <div className={classes.spacer} />
                <Button
                  variant="contained"
                  type="button"
                  color="default"
                  className={classes.button}
                  onClick={this.clearNewTodo}
                  >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  className={classes.button}
                  >
                  Adicionar
                </Button>
              </Grid>
            </form>
          </CardContent>
        </Card>

        <CardTitle>
          Tarefas
        </CardTitle>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={classes.titleCell}>Título</TableCell>
                <TableCell>Descrição</TableCell>
              </TableRow>                    
            </TableHead>
            <TableBody>
              {todos.data.map(this.renderTableRow)}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const ComponentWithStyles = withStyles(styles)(TableView);

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

const mapStateToProps = state => ({ todos: state.todos });

export default connect(mapStateToProps, mapDispatchToProps)(ComponentWithStyles);
