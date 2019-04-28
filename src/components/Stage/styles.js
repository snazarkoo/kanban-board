import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';

export const StageContainer = styled(Card)`
  && {
    min-width: 270px;
    background-color: #f4f5f7;
    margin: 0 10px;
    padding: 5px;
  }
`;

export const StageHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StageContent = styled.div`
  min-height: 15px;
  margin: 10px 0;
`;

export const StageActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledInput = styled(Input)`
  padding: 0 5px;
  border-radius: 2px;
  overflow: hidden;
  flex: 1;

  & > input {
    padding: 6px;
  }

  & > input:focus {
    background-color: #fff;
    outline: auto;
  }
`;
