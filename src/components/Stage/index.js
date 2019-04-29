import React, {Component} from 'react';
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
import Card from '../Card';

export default class Stage extends Component {
  state = {
    title: this.props.stage.title
  };

  onInputChange = event => {
    const title = event.target.value;

    this.setState({title});
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

  render() {
    const {title} = this.state;

    return (
      <StageContainer>
        <StageHeader>
          <StyledInput
            disableUnderline
            value={title}
            onChange={this.onInputChange}
            onBlur={this.onChangeTitle}
          />
          <IconButton>
            <Delete />
          </IconButton>
        </StageHeader>
        <StageContent>
          <Card />
        </StageContent>
        <StageActions>
          <Button size="small">Add card</Button>
        </StageActions>
      </StageContainer>
    );
  }
}
