import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const StageListContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  padding: 15px 0;
`;

export const StyledButton = styled(Button)`
  && {
    width: 270px;
    max-height: 80px;
    background-color: #f4f5f7;
    margin: 0 10px;
    padding: 5px;
  }
`;
