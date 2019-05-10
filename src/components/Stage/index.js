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
import {addCard, removeCard} from '../../actions/cards';

const mapStateToProps = state => ({
  cards: state.cards.cards
});

const mapDispatchToProps = dispatch => ({
  onAddCard: (title, description) => dispatch(addCard(title, description)),
  onRemoveCard: id => dispatch(removeCard(id))
});

class Stage extends Component {
  state = {
    title: this.props.stage.title,
    addCardDialogOpen: false
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
      [fieldName]: false
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

  addCard = (title, description) => {
    const {onAddCard, stage} = this.props;

    this.closeDialog('addCardDialogOpen')();

    const card = {
      title,
      description,
      stage: stage.id
    };

    onAddCard(card);
  };

  renderContent() {
    const {onRemoveCard} = this.props;

    if (!this.stageCards.length) return;

    return (
      <StageContent>
        {this.stageCards.map(card => {
          return <Card key={card.id} card={card} onRemoveCard={onRemoveCard} />;
        })}
      </StageContent>
    );
  }

  render() {
    const {onRemoveStage, stage} = this.props;
    const {title, addCardDialogOpen} = this.state;

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
        <DialogAddCard
          open={addCardDialogOpen}
          onAddCard={this.addCard}
          onCloseDialog={this.closeDialog('addCardDialogOpen')}
        />
      </Fragment>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stage);
