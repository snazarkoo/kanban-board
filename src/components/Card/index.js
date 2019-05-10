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

  render() {
    const {card} = this.props;
    const {anchorEl} = this.state;
    const open = Boolean(anchorEl);

    return (
      <StyledCard>
        <CardTitle>{card.title}</CardTitle>

        <Actions>
          <StyledIconButton disabled>
            <ArrowLeft />
          </StyledIconButton>
          <StyledIconButton>
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
            <MenuItem onClick={this.handleClose}>Edit</MenuItem>
            <MenuItem onClick={this.handleClose}>Move to</MenuItem>
            <MenuItem onClick={this.handleRemove}>Remove</MenuItem>
          </Menu>
        </Actions>
      </StyledCard>
    );
  }
}
