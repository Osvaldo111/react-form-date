import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import classnames from 'classnames';
import blacklist from 'blacklist';
import './style.scss';

function handleNumericKeyDown(e) {
  const { key } = e;

  if (key === 'ArrowUp' || key === 'ArrowDown') {
    e.preventDefault();
  }
}

class TextField extends Component {
  static propTypes = {
    id: PropTypes.string,
    maxlength: PropTypes.string,
    className: PropTypes.string,
    styleName: PropTypes.string,
    disabled: PropTypes.bool,
    disabledCursor: PropTypes.bool,
    errorText: PropTypes.node,
    labelText: PropTypes.node,
    leftIcon: PropTypes.node,
    placeholder: PropTypes.string,
    rightIcon: PropTypes.node,
    multiLine: PropTypes.bool,
    inline: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
    fileName: PropTypes.string,
    onFocus: PropTypes.func,
    value: PropTypes.string,
    width: PropTypes.number,
  }

  static defaultProps = {
    className: '',
    multiLine: false,
    type: 'text',
    errorText: 'Required value',
    value: null,
    onFocus: null,
  }

  buildInput(field) {
    const { multiLine, leftIcon, rightIcon, type, fileName, placeholder, maxlength, disabledCursor } = this.props;
    const inputProps = blacklist(field,
      'name',
      'input',
      'errorText',
      'labelText',
      'leftIcon',
      'rightIcon',
      'multiLine',
      'meta',
      'fileName',
      'inline',
      'boldLabel',
    );
    const containerStyleNames = classnames({
      'input-group': true,
      'left-text': typeof leftIcon === 'string',
      'right-text': typeof rightIcon === 'string',
      'left-icon': (typeof leftIcon !== 'string' && leftIcon),
      'right-icon': (typeof rightIcon !== 'string' && rightIcon),
    });
    let inputElement;

    if (type === 'number') {
      inputProps.onKeyDown = inputProps.onKeyDown ? inputProps.onKeyDown : handleNumericKeyDown;
      inputProps.onWheel = e => e.preventDefault();
    }

    delete inputProps.className;
    if (multiLine) {
      inputElement = (<textarea {...field.input} {...inputProps} maxLength={maxlength} placeholder={placeholder} className="input" />);
    } else if (type === 'file') {
      inputElement = (
        <button type="button" className="input" onClick={this.inputFile.click}>
          <input
            {...inputProps}
            onChange={field.input.onChange}
            ref={ele => { this.inputFile = ele; }}
          />
          <span title={fileName}>{fileName}</span>
        </button>
      );
    } else {
      inputElement = (<input {...field.input} {...inputProps} className="input" disabled={disabledCursor}/>);
    }

    return (
      <div className={containerStyleNames}>
        {leftIcon && (
          <span className="input-addon">
            {leftIcon}
          </span>
        )}

        {inputElement}

        {rightIcon && (
          <span className="input-addon">
            {rightIcon}
          </span>
        )}
      </div>
    );
  }


  renderField = field => {
    const {
      id,
      className,
      styleName,
      errorText,
      labelText,
      disabled,
      inline,
      name,
      width,
      value,
      onFocus,
      disabledCursor
    } = this.props;

    if (value && onFocus && field.input) {
      // eslint-disable-next-line no-param-reassign
      field.input.value = value;
      // eslint-disable-next-line no-param-reassign
      field.input.onFocus = onFocus;
    }
    const style = { width };
    const inputElement = this.buildInput(field);
    const hasError = !field.meta.active && field.meta.error && field.meta.touched;

    const stylenames = classnames({
      'input-container': true,
      error: hasError,
      [styleName]: !!styleName,
      disabled,
      disabledCursor,
      inline,
    });

    return (
      <div className={className} className={stylenames} style={style}>
        {labelText && <label htmlFor={name}>{labelText}</label>}
        {inputElement}
        {hasError && <span id={`${id}-error`} className="input-error-text">{errorText}</span>}
      </div>
    );
  }

  render() {
    return (<Field {...this.props} component={this.renderField} />);
  }
}

export default TextField;
