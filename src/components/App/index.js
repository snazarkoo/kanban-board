import React from 'react';
import StageList from '../StageList';
import UserAvatarList from '../UserAvatarList';
import {AppContainer} from './styles';

function App() {
  return (
    <AppContainer>
      <UserAvatarList />
      <StageList />
    </AppContainer>
  );
}

export default App;
