import React, { Fragment } from 'react';

import {
  Label,
  inputContainer,
  inputClass,
  passWordVisibility,
  passwordNotVisible,
  passwordVisible,
  mdClass,
  boxClass,
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
    // console.log("target", target, this.state.visible)
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
            className={`${inputClass} ${materialDesign ? mdClass : boxClass} ${isEmptyValue || hasValue}`}
            id={id}
            name={id}
            onChange={this.handleOnChange}
            placeholder={placeholder}
            disabled={disabled || false} />
          {materialDesign && <Label htmlFor={id}>{label}</Label>}
          {materialDesign && <div className={underline} />}
          {
            (propsType === 'password' && !isEmptyValue) &&
            <div className={passWordVisibility}>
              {
                (visible) ?
                  <span className={passwordVisible} onClick={() => this.toggle('visible')} />
                  :
                  <span className={passwordNotVisible} onClick={() => this.toggle('visible')} />
              }
            </div>
          }
        </div>
      </Fragment>
    )
  }
}

export default TextInput;