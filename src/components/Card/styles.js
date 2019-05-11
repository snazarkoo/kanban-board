import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';

export const StyledIconButton = styled(IconButton)`
  && {
    padding: 4px;
    margin: 2px;
    display: none;
    opacity: 0.8;
    background-color: #f4f5f7;

    &:hover {
      display: block;
      opacity: 1;
      background-color: #f4f5f7;
    }
  }
`;

export const StyledCard = styled(Card)`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 36px;
  margin: 8px 0;
  position: relative;

  &:hover ${StyledIconButton} {
    display: block;
  }
`;

export const CardTitle = styled.p`
  margin: 0;
  padding: 4px 8px;
  word-wrap: break-word;
  max-width: 240px;
`;

export const Actions = styled.div`
  display: flex;
  align-content: flex-end;
  flex-direction: row;
  position: absolute;
  right: 0;
  top: 0;
`;
