import React, {Component} from 'react';

import {StyledAvatar, StyledButton} from './styles';

export default class UserAvatar extends Component {
  get name() {
    const {firstName, lastName} = this.props.user;

    return `${firstName[0]}${lastName[0]}`;
  }

  handleSelect = event => {
    const {onSelect, user} = this.props;

    onSelect(user, event);
  };

  render() {
    const {user} = this.props;

    return (
      <StyledButton onClick={this.handleSelect}>
        <StyledAvatar color={user.color}>{this.name}</StyledAvatar>
      </StyledButton>
    );
  }
}
