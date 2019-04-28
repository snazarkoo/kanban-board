import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

export const StyledButton = styled(IconButton)`
  && {
    padding: 0;
    margin: 0 5px;
  }
`;

export const StyledAvatar = styled(Avatar)`
  background-color: ${props => props.color || '#ff5722'};
`;
