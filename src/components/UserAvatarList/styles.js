import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px 10px;
`;

export const AvatarList = styled.div`
  display: flex;
  flex-direction: row;
  padding-right: 10px;
`;

export const StyledPaper = styled(Paper)`
  && {
    padding: 8px;
  }
`;

export const UserInfo = styled.div`
  padding: 8px;
`;

export const UserName = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

export const UserId = styled.p`
  color: #6b778c;
  font-size: 12px;
`;
