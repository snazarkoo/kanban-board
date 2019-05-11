import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {
  StageContainer,
  StyledInput,
  StageHeader,
  StageActions,
  StageContent
} from './styles';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import DialogAddCard from '../DialogAddCard';
import Card from '../Card';
import {addCard, removeCard, editCard} from '../../actions/cards';

const mapStateToProps = state => ({
  cards: state.cards.cards,
  users: state.users.users,
  stages: state.stages.stages
});

const mapDispatchToProps = dispatch => ({
  onAddCard: (title, description) => dispatch(addCard(title, description)),
  onRemoveCard: id => dispatch(removeCard(id)),
  onEditCard: card => dispatch(editCard(card))
});

class Stage extends Component {
  state = {
    title: this.props.stage.title,
    addCardDialogOpen: false,
    card: null
  };

  get stageCards() {
    const {cards, stage} = this.props;

    return cards.filter(card => card.stage === stage.id);
  }

  onInputChange = event => {
    const title = event.target.value;

    this.setState({title});
  };

  openDialog = fieldName => () => {
    this.setState({
      [fieldName]: true
    });
  };

  closeDialog = fieldName => () => {
    this.setState({
      [fieldName]: false,
      card: null
    });
  };

  onChangeTitle = () => {
    const {
      stage: {id, title},
      onChangeTitle
    } = this.props;
    const {title: newTitle} = this.state;

    if (!newTitle) return this.setState({title});

    onChangeTitle(newTitle, id);
  };

  addCard = card => {
    const {onAddCard, stage} = this.props;

    this.closeDialog('addCardDialogOpen')();

    const newCard = {
      ...card,
      stage: stage.id
    };

    onAddCard(newCard);
  };

  editCard = card => {
    const {onEditCard} = this.props;

    this.closeDialog('addCardDialogOpen')();

    onEditCard(card);
  };

  moveCard = card => stageId => {
    const {onEditCard} = this.props;

    const newCard = {
      ...card,
      stage: stageId
    };

    onEditCard(newCard);
  };

  openEditCardDialog = card => {
    this.openDialog('addCardDialogOpen')();

    this.setState({
      card
    });
  };

  renderContent() {
    const {onRemoveCard, stages} = this.props;

    if (!this.stageCards.length) return;

    return (
      <StageContent>
        {this.stageCards.map(card => {
          return (
            <Card
              key={card.id}
              card={card}
              onRemoveCard={onRemoveCard}
              onEditCard={this.openEditCardDialog}
              onMoveCard={this.moveCard(card)}
              stages={stages}
            />
          );
        })}
      </StageContent>
    );
  }

  render() {
    const {onRemoveStage, stage, users} = this.props;
    const {title, addCardDialogOpen, card} = this.state;

    return (
      <Fragment>
        <StageContainer>
          <StageHeader>
            <StyledInput
              disableUnderline
              value={title}
              onChange={this.onInputChange}
              onBlur={this.onChangeTitle}
            />
            <IconButton onClick={() => onRemoveStage(stage, this.stageCards)}>
              <Delete />
            </IconButton>
          </StageHeader>

          {this.renderContent()}

          <StageActions>
            <Button size="small" onClick={this.openDialog('addCardDialogOpen')}>
              Add card
            </Button>
          </StageActions>
        </StageContainer>
        {addCardDialogOpen && (
          <DialogAddCard
            open={addCardDialogOpen}
            onAddCard={this.addCard}
            onEditCard={this.editCard}
            onCloseDialog={this.closeDialog('addCardDialogOpen')}
            users={users}
            card={card}
          />
        )}
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stage);
