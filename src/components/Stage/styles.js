import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';

export const StyledCard = styled(Card)`
  width: 270px;
  background-color: #f9f8f7;
  min-height: 100px;
`;

export const StageHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StageContent = styled.div`
  min-height: 15px;
`;

export const StageActions = styled.div`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
`;

export const StyledInput = styled(Input)`
  padding: 0 2px 0 10px;
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
