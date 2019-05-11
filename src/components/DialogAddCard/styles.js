import styled from 'styled-components';
import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import Select from 'react-select';

import FormControl from '@material-ui/core/FormControl';

export const StyledDialogContent = styled(DialogContent)`
  && {
    overflow-y: initial;
  }
`;

export const StyledDialog = styled(props => (
  <Dialog {...props} classes={{paper: 'paper'}} />
))`
  & .paper {
    overflow-y: initial;
  }
`;

export const StyledFormControl = styled(FormControl)`
  && {
    width: 100%;
    margin-top: 8px;
  }
`;

export const StyledSelect = styled(Select)`
  margin-top: 8px;
`;
