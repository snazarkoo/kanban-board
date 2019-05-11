import React, {Component} from 'react';

import {StyledCard, CardTitle, StyledIconButton, Actions} from './styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRight from '@material-ui/icons/ArrowRight';
import ArrowLeft from '@material-ui/icons/ArrowLeft';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

export default class Card extends Component {
  state = {
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  handleRemove = () => {
    const {onRemoveCard, card} = this.props;

    this.handleClose();

    onRemoveCard(card.id);
  };

  handleEdit = () => {
    const {onEditCard, card} = this.props;

    this.handleClose();

    onEditCard(card);
  };

  moveCard = direction => () => {
    const {onMoveCard, card, stages} = this.props;
    const currentPosition = stages.findIndex(({id}) => id === card.stage);
    const nextPosition =
      direction === 'right' ? currentPosition + 1 : currentPosition - 1;
    const newStageId = stages[nextPosition].id;

    onMoveCard(newStageId);
  };

  render() {
    const {card, stages} = this.props;
    const {anchorEl} = this.state;
    const open = Boolean(anchorEl);
    const isFirstStage = card.stage === stages[0].id;
    const isLastStage = card.stage === stages[stages.length - 1].id;

    return (
      <StyledCard>
        <CardTitle>{card.title}</CardTitle>
        <Actions>
          <StyledIconButton
            disabled={isFirstStage}
            onClick={this.moveCard('left')}
          >
            <ArrowLeft />
          </StyledIconButton>
          <StyledIconButton
            disabled={isLastStage}
            onClick={this.moveCard('right')}
          >
            <ArrowRight />
          </StyledIconButton>
          <StyledIconButton
            aria-owns={open ? 'menu-appbar' : undefined}
            aria-haspopup="true"
            onClick={this.handleMenu}
          >
            <MoreVertIcon />
          </StyledIconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            open={open}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleEdit}>Edit</MenuItem>
            <MenuItem onClick={this.handleClose}>Move to</MenuItem>
            <MenuItem onClick={this.handleRemove}>Remove</MenuItem>
          </Menu>
        </Actions>
      </StyledCard>
    );
  }
}
