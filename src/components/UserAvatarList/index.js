import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';

import UserAvatar from '../UserAvatar';

import {
  StyledPaper,
  ListWrapper,
  AvatarList,
  UserInfo,
  UserName,
  UserId
} from './styles';

export default class UserAvatarList extends Component {
  state = {
    anchorEl: null,
    open: false
  };

  handleClick = event => {
    const {currentTarget} = event;

    this.setState(state => ({
      anchorEl: currentTarget,
      open: state.currentTarget !== currentTarget || !state.open
    }));
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
      open: false
    });
  };

  renderUserPopper() {
    const {anchorEl, open} = this.state;

    return (
      <Popover
        id="simple-popper"
        open={open}
        anchorEl={anchorEl}
        onClose={this.handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        <StyledPaper>
          <UserInfo>
            <UserName>Nazar Shcherbiak</UserName>
            <UserId>1241445435634</UserId>
          </UserInfo>
          <Button size="small">Remove user</Button>
        </StyledPaper>
      </Popover>
    );
  }

  render() {
    return (
      <ListWrapper>
        <AvatarList>
          <UserAvatar onClick={this.handleClick} />
          <UserAvatar onClick={this.handleClick} />
        </AvatarList>
        <Button size="small">Add user</Button>
        {this.renderUserPopper()}
      </ListWrapper>
    );
  }
}
