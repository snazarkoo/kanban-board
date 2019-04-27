import React, {Component} from 'react';

import {
  StyledCard,
  StyledInput,
  StageHeader,
  StageActions,
  StageContent
} from './styles';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

export default class Stage extends Component {
  render() {
    return (
      <StyledCard>
        <StageHeader>
          <StyledInput defaultValue="To do" margin="none" disableUnderline />
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </StageHeader>
        <StageContent />
        <StageActions>
          <Button size="small">Add card</Button>
        </StageActions>
      </StyledCard>
    );
  }
}
