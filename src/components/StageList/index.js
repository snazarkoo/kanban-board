import React, {Component} from 'react';
import Stage from '../Stage';

import {StageListContainer, StyledButton} from './styles';

export default class StageList extends Component {
  render() {
    return (
      <StageListContainer>
        <Stage />
        <Stage />
        <StyledButton>Add stage</StyledButton>
      </StageListContainer>
    );
  }
}
