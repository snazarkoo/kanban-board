import React, {Component, Fragment} from 'react';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import {connect} from 'react-redux';

import {addUser, removeUser} from '../../actions/users';

import UserAvatar from '../UserAvatar';
import DialogAddUser from '../DialogAddUser';

import {
  StyledPaper,
  ListWrapper,
  AvatarList,
  UserInfo,
  UserName,
  UserId
} from './styles';

const mapStateToProps = state => ({
  users: state.users.users
});

const mapDispatchToProps = dispatch => ({
  onAddUser: user => dispatch(addUser(user)),
  onRemoveUser: id => dispatch(removeUser(id))
});

class UserAvatarList extends Component {
  state = {
    anchorEl: null,
    isPopOverOpen: false,
    isDialogOpen: false,
    selectedUser: {}
  };

  openPopover = (user, event) => {
    const {currentTarget} = event;

    this.setState(state => ({
      anchorEl: currentTarget,
      isPopOverOpen: state.currentTarget !== currentTarget || !state.open,
      selectedUser: user
    }));
  };

  closePopover = () => {
    this.setState({
      anchorEl: null,
      isPopOverOpen: false,
      selectedUser: {}
    });
  };

  openDialog = () => {
    this.setState({
      isDialogOpen: true
    });
  };

  closeDialog = () => {
    this.setState({
      isDialogOpen: false
    });
  };

  addUser = user => {
    const {onAddUser} = this.props;

    this.closeDialog();

    onAddUser(user);
  };

  removeUser = () => {
    const {onRemoveUser} = this.props;

    onRemoveUser(this.state.selectedUser.id);

    this.closePopover();
  };

  renderUserPopper() {
    const {
      anchorEl,
      isPopOverOpen,
      selectedUser: {id, firstName, lastName}
    } = this.state;
    const userName = `${firstName} ${lastName}`;

    return (
      <Popover
        id="simple-popper"
        open={isPopOverOpen}
        anchorEl={anchorEl}
        onClose={this.closePopover}
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
            <UserName>{userName}</UserName>
            <UserId>{id}</UserId>
          </UserInfo>
          <Button size="small" onClick={this.removeUser}>
            Remove user
          </Button>
        </StyledPaper>
      </Popover>
    );
  }

  render() {
    const {users} = this.props;
    const {isDialogOpen} = this.state;

    return (
      <Fragment>
        <ListWrapper>
          <AvatarList>
            {users.map(user => (
              <UserAvatar
                key={user.id}
                user={user}
                onSelect={this.openPopover}
              />
            ))}
          </AvatarList>
          <Button size="small" onClick={this.openDialog}>
            Add user
          </Button>
        </ListWrapper>
        <DialogAddUser
          open={isDialogOpen}
          onAddUser={this.addUser}
          onCloseDialog={this.closeDialog}
        />
        {this.renderUserPopper()}
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserAvatarList);
