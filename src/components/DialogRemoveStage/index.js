import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default class DialogRemoveStage extends Component {
  render() {
    const {onCloseDialog, open, onRemove} = this.props;

    return (
      <Dialog open={open} onClose={onCloseDialog}>
        <DialogTitle id="alert-dialog-title">Remove the stage?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            All tasks inside the stage will be removed
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onCloseDialog} color="primary">
            Disagree
          </Button>
          <Button onClick={onRemove} color="primary" autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
