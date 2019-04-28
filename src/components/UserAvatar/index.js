import React, {Component} from 'react';

import {StyledAvatar, StyledButton} from './styles';

export default class UserAvatar extends Component {
  render() {
    const {onClick} = this.props;

    return (
      <StyledButton onClick={onClick}>
        <StyledAvatar>NS</StyledAvatar>
      </StyledButton>
    );
  }
}
