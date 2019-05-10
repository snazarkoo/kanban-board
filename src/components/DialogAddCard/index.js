import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const initialState = {
  name: '',
  description: ''
};

export default class DialogAddCard extends Component {
  state = initialState;

  onInputChange = fieldName => event => {
    const value = event.target.value;

    this.setState({
      [fieldName]: value
    });
  };

  addCard = event => {
    event.preventDefault();
    const {onAddCard} = this.props;
    const {name, description} = this.state;

    onAddCard(name, description);

    this.setState(initialState);
  };

  onClose = () => {
    const {onCloseDialog} = this.props;

    onCloseDialog();

    this.setState(initialState);
  };

  render() {
    const {open} = this.props;
    const {name, description} = this.state;

    return (
      <Dialog open={open} onClose={this.onClose}>
        <form autoComplete="off" onSubmit={this.addCard}>
          <DialogTitle id="form-dialog-title">Add card</DialogTitle>
          <DialogContent>
            <TextField
              required
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              fullWidth
              value={name}
              onChange={this.onInputChange('name')}
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              fullWidth
              value={description}
              onChange={this.onInputChange('description')}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.onClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Save
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}
