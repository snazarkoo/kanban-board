import React, {Component} from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {StyledDialogContent, StyledDialog, StyledSelect} from './styles';

const inputComponent = ({inputRef, ...props}) => {
  return <div ref={inputRef} {...props} />;
};

const Control = props => {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          children: props.children,
          ...props.innerProps,
          style: {
            display: 'flex',
            padding: 0
          }
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  );
};

const initialState = {
  title: '',
  description: '',
  user: null
};

const computeState = ({card}, users) => {
  return card
    ? {
        ...card,
        user: users.find(({value}) => value === card.userId)
      }
    : initialState;
};

export default class DialogAddCard extends Component {
  usersSuggestions = this.props.users.map(user => ({
    value: user.id,
    label: `${user.firstName} ${user.lastName}`
  }));

  state = computeState(this.props, this.usersSuggestions);

  onInputChange = fieldName => event => {
    const value = event.target.value;

    this.setState({
      [fieldName]: value
    });
  };

  handleSelect = user => {
    this.setState({
      user
    });
  };

  save = event => {
    event.preventDefault();
    const {onAddCard, onEditCard, card} = this.props;
    const {title, description, user} = this.state;

    const newCard = {
      ...card,
      title,
      description,
      userId: user && user.value
    };

    if (card) return onEditCard(newCard);

    onAddCard(newCard);
  };

  render() {
    const {open, card, onCloseDialog} = this.props;
    const {title, description, user} = this.state;
    const dialogTitle = card ? 'Edit card' : 'Add card';

    return (
      <StyledDialog open={open} onClose={onCloseDialog} scroll="body">
        <form autoComplete="off" onSubmit={this.save}>
          <DialogTitle id="form-dialog-title">{dialogTitle}</DialogTitle>
          <StyledDialogContent>
            <TextField
              required
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              fullWidth
              value={title}
              onChange={this.onInputChange('title')}
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              fullWidth
              value={description}
              onChange={this.onInputChange('description')}
            />

            <StyledSelect
              options={this.usersSuggestions}
              textFieldProps={{
                label: 'Assignee',
                InputLabelProps: {
                  shrink: true
                }
              }}
              value={user}
              onChange={this.handleSelect}
              placeholder="Select the user"
              isClearable
              components={{
                Control
              }}
            />
          </StyledDialogContent>
          <DialogActions>
            <Button onClick={onCloseDialog} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Save
            </Button>
          </DialogActions>
        </form>
      </StyledDialog>
    );
  }
}
