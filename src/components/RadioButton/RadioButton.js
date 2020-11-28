import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

class RadioButton extends PureComponent {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    labelText: PropTypes.node,
    name: PropTypes.string,
    size: PropTypes.oneOf(['big']),
    value: PropTypes.node,
    onChange: PropTypes.func,
  };

  constructor() {
    super();

    this.radio = undefined;

    this.onClickCustomRadio = this.onClickCustomRadio.bind(this);
    this.setRefRadio = this.setRefRadio.bind(this);
  }

  onClickCustomRadio() {
    this.radio.click();
  }

  setRefRadio(element) {
    this.radio = element;
  }

  render() {
    const { id, className, checked, disabled, name, size, value, labelText, onChange } = this.props;

    const classes = classnames({
      radio: true,
      active: checked,
      disabled,
      [size]: !!size,
    });

    const radioClasses = classnames({
      'radio-button': true,
      active: checked,
    });

    const customProps = {
      onClick: this.onClickCustomRadio,
    };
   
    return (
      <div className={classes} id="here-u-go">
        <label htmlFor={name}>
          <div id={`${id}-radio`} className={radioClasses} {...customProps} />

          <span {...customProps}>{labelText}</span>

          <input
            id={id}
            type="radio"
            name={name}
            value={value}
            checked={checked}
            disabled={disabled}
            ref={this.setRefRadio}
            onChange={onChange}
            data-checked={checked}
          />
        </label>
      </div>
    );
  }
}

export default RadioButton;
