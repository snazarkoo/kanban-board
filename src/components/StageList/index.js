import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import Stage from '../Stage';
import {StageListContainer, StyledButton} from './styles';
import {addStage, removeStage, renameStageById} from '../../actions/stages';
import DialogAddStage from '../DialogAddStage';

const mapStateToProps = state => ({
  stages: state.stages.stages
});

const mapDispatchToProps = dispatch => ({
  onAddStage: (title, position) => dispatch(addStage(title, position)),
  onRemoveStage: id => dispatch(removeStage(id)),
  onRenameStage: (title, stageId) => dispatch(renameStageById(title, stageId))
});

class StageList extends Component {
  state = {
    isDialogOpen: false
  };

  openDialog = () => {
    this.setState({
      isDialogOpen: true
    });
  };

  closeDialog = () => {
    this.setState({
      isDialogOpen: false
    });
  };

  addStage = (title, position) => {
    const {onAddStage} = this.props;

    this.closeDialog();

    onAddStage(title, position);
  };

  render() {
    const {stages, onAddStage, onRenameStage} = this.props;
    const {isDialogOpen} = this.state;

    return (
      <Fragment>
        <StageListContainer>
          {stages.map(stage => (
            <Stage key={stage.id} stage={stage} onChangeTitle={onRenameStage} />
          ))}
          <StyledButton onClick={this.openDialog}>Add stage</StyledButton>
        </StageListContainer>
        <DialogAddStage
          open={isDialogOpen}
          onAddStage={this.addStage}
          onCloseDialog={this.closeDialog}
          stagesCount={stages.length}
        />
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StageList);
