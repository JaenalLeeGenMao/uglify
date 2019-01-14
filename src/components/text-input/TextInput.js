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
  underline,
  errorClass
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
      onChange(e);
    }
    const val = e.target.value;
    this.setState({
      isEmptyValue: val == ""
    });
  }

  handleOnKeyUp = e => {
    const { onKeyUp } = this.props;
    if (onKeyUp) {
      onKeyUp(e);
    }
  }

  handleOnFocus = e => {
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus(e);
    }
  }

  handleOnBlur = e => {
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(e);
    }
  }

  handleOnInput = e => {
    const { onInput } = this.props;
    if (onInput) {
      onInput(e);
    }
  }

  /***
   * on Parent component (caller component)
   * set callback func to set ref
  
  var emailInputRef;
  setEmailRef = (ref) => {
    emailInputRef = ref;
  }
  ****/

  render() {
    const { materialDesign, className, placeholder, label, type: propsType, id, disabled, setRef, isError, errorClassName = '' } = this.props;
    const { visible, isEmptyValue, type } = this.state;
    const inputType = type || 'text'
    const errClass = `${errorClass} ${errorClassName}`;
    return (
      <Fragment>
        <div className={`${inputContainer} ${className || ''} ${isError ? errClass : ''}`}>
          <input
            type={inputType}
            className={`${inputClass} 
              ${materialDesign ? mdClass : boxClass} 
              ${isEmptyValue ? '' : hasValue}`}
            id={id}
            ref={setRef}
            name={id}
            onChange={this.handleOnChange}
            onKeyUp={this.handleOnKeyUp}
            onInput={this.handleOnInput}
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
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