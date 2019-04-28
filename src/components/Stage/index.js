import React, {Component} from 'react';

import {
  StageContainer,
  StyledInput,
  StageHeader,
  StageActions,
  StageContent
} from './styles';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Card from '../Card';

export default class Stage extends Component {
  render() {
    return (
      <StageContainer>
        <StageHeader>
          <StyledInput defaultValue="To do" margin="none" disableUnderline />
          <IconButton>
            <Delete />
          </IconButton>
        </StageHeader>
        <StageContent>
          <Card />
          <Card />
        </StageContent>
        <StageActions>
          <Button size="small">Add card</Button>
        </StageActions>
      </StageContainer>
    );
  }
}
