import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class DialogCreateUser extends Component {
  state = {
    firstName: '',
    lastName: ''
  };

  onInputChange = fieldName => event => {
    const value = event.target.value;

    this.setState({
      [fieldName]: value
    });
  };

  addUser = event => {
    event.preventDefault();
    const {onAddUser} = this.props;
    const {firstName, lastName} = this.state;

    onAddUser({firstName, lastName});
  };

  render() {
    const {onCloseDialog, open} = this.props;
    const {firstName, lastName} = this.state;

    return (
      <Dialog open={open} onClose={onCloseDialog}>
        <form autoComplete="off" onSubmit={this.addUser}>
          <DialogTitle id="form-dialog-title">Add user</DialogTitle>
          <DialogContent>
            <TextField
              required
              autoFocus
              margin="dense"
              id="firstName"
              label="First name"
              fullWidth
              value={firstName}
              onChange={this.onInputChange('firstName')}
            />
            <TextField
              required
              margin="dense"
              id="lastName"
              label="Last name"
              value={lastName}
              fullWidth
              onChange={this.onInputChange('lastName')}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={onCloseDialog} color="primary">
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
