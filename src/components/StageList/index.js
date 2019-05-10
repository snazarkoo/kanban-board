import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import Stage from '../Stage';
import {StageListContainer, StyledButton} from './styles';
import {addStage, removeStage, renameStageById} from '../../actions/stages';
import DialogAddStage from '../DialogAddStage';
import DialogRemoveStage from '../DialogRemoveStage';

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
    addDialogOpen: false,
    removeDialogOpen: false,
    stage: null
  };

  openDialog = fieldName => () => {
    this.setState({
      [fieldName]: true
    });
  };

  closeDialog = fieldName => () => {
    this.setState({
      [fieldName]: false
    });
  };

  addStage = (title, position) => {
    const {onAddStage} = this.props;

    this.closeDialog('addDialogOpen')();

    onAddStage(title, position);
  };

  removeStage = (stage, cards) => {
    const {onRemoveStage} = this.props;

    if (!cards.length) return onRemoveStage(stage.id);

    this.setState({
      stage
    });

    this.openDialog('removeDialogOpen')();
  };

  removeStageWithCards = () => {
    const {onRemoveStage} = this.props;
    const {stage} = this.state;

    onRemoveStage(stage.id);

    this.closeDialog('removeDialogOpen')();
  };

  render() {
    const {stages, onRenameStage} = this.props;
    const {addDialogOpen, removeDialogOpen} = this.state;

    return (
      <Fragment>
        <StageListContainer>
          {stages.map(stage => (
            <Stage
              key={stage.id}
              stage={stage}
              onChangeTitle={onRenameStage}
              onRemoveStage={this.removeStage}
            />
          ))}
          <StyledButton onClick={this.openDialog('addDialogOpen')}>
            Add stage
          </StyledButton>
        </StageListContainer>
        <DialogAddStage
          open={addDialogOpen}
          onAddStage={this.addStage}
          onCloseDialog={this.closeDialog('addDialogOpen')}
          stagesCount={stages.length}
        />
        <DialogRemoveStage
          open={removeDialogOpen}
          onRemove={this.removeStageWithCards}
          onCloseDialog={this.closeDialog('removeDialogOpen')}
        />
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StageList);
