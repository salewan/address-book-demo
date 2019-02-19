import React from 'react';
import {Input} from 'reactstrap';
import PropTypes from 'prop-types';

const WAIT_INTERVAL = 500;
const ENTER_KEY = 13;

class FilterInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    };
  }

  componentWillMount() {
    this.timer = null;
  }

  handleChange = e => {
    const value = e.target.value;
    clearTimeout(this.timer);
    this.setState({value});
    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
  };

  handleKeyDown = (e) => {
    if (e.keyCode === ENTER_KEY) {
      clearTimeout(this.timer);
      this.triggerChange();
    }
  };

  triggerChange = () => {
    const {value} = this.state;
    this.props.onChange(value);
  };

  render() {
    return (
      <Input
        type="text"
        placeholder=""
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        style={{...this.props.style}}
        className={this.props.className}
      />
    )
  }
}

FilterInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string
};

export default FilterInput;
