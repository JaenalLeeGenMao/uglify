import React, { Fragment } from 'react';
import {
  Label,
  inputContainer,
  inputClass,
  passWordVisibility,
  passwordNotVisible,
  passwordVisible,
  transparent,
  hasValue,
  underline
} from './style'

class TextInput extends React.Component {
  state = {
    isEmptyValue: true,
    type: this.props.type,
    visible: false,
  }

  toggle(target) {
    this.setState({
      [target]: !this.state[target]
    })
    this.toggleVisible(this.state.visible)
  }

  toggleVisible(condition) {
    let type = 'password'
    if (!condition) {
      type = 'text'
    }

    this.setState({
      type: type
    })
  }

  componentWillMount() {
    let { type } = this.props
    type = type || 'text'

    this.setState({
      type: type
    })
  }

  handleOnChange = e => {
    const { onChange } = this.props;
    if (onChange) {
      onChange();
    }
    const val = e.target.value;
    this.setState({
      isEmptyValue: val == ""
    });
  }

  render() {
    const { materialDesign, className, placeholder, label, type: propsType, id, disabled } = this.props;
    const { visible, isEmptyValue, type } = this.state;
    const inputType = type || 'text'
    return (
      <Fragment>
        <div className={`${inputContainer} ${className || ''}`}>
          <input
            type={inputType}
            className={`${inputClass} ${materialDesign && transparent} ${isEmptyValue || hasValue}`}
            id={id}
            name={id}
            onChange={this.handleOnChange}
            placeholder={placeholder}
            disabled={disabled || false} />
          <Label htmlFor={id}>{label}</Label>
          <div className={underline} />
          {
            (propsType === 'password' && !isEmptyValue) &&
            <Fragment>
              {
                (visible) ?
                  <div className={passWordVisibility}><span className={passwordVisible} onClick={() => this.toggle('visible')} /></div>
                  :
                  <div className={passWordVisibility}><span className={passwordNotVisible} onClick={() => this.toggle('visible')} /></div>
              }
            </Fragment>
          }
        </div>
      </Fragment>
    )
  }
}

export default TextInput;