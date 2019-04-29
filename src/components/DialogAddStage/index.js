import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import {StyledFormControl} from './styles';

const initialState = {
  name: '',
  position: ''
};

export default class DialogAddStage extends Component {
  state = initialState;

  onInputChange = fieldName => event => {
    const value = event.target.value;

    this.setState({
      [fieldName]: value
    });
  };

  addStage = event => {
    event.preventDefault();
    const {onAddStage} = this.props;
    const {name, position} = this.state;

    onAddStage(name, parseFloat(position));

    this.setState(initialState);
  };

  onSelect = event => {
    this.setState({position: event.target.value});
  };

  onClose = () => {
    const {onCloseDialog} = this.props;

    onCloseDialog();

    this.setState(initialState);
  };

  renderSelectListPosition() {
    const {stagesCount} = this.props;
    const {position} = this.state;

    return (
      <StyledFormControl>
        <InputLabel htmlFor="position">Position</InputLabel>
        <Select
          native
          fullWidth
          required
          value={position}
          onChange={this.onSelect}
          inputProps={{
            name: 'position',
            id: 'position'
          }}
        >
          <option value="" disabled />
          {[...Array(stagesCount + 1)].map((s, index) => (
            <option value={index} key={index}>
              {index + 1}
            </option>
          ))}
        </Select>
      </StyledFormControl>
    );
  }

  render() {
    const {onCloseDialog, open} = this.props;
    const {name} = this.state;

    return (
      <Dialog open={open} onClose={this.onClose}>
        <form autoComplete="off" onSubmit={this.addStage}>
          <DialogTitle id="form-dialog-title">Add stage</DialogTitle>
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
            {this.renderSelectListPosition()}
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
