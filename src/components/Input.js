import React from 'react';

const Input = props => {
  return (
    <input
      maxLength="1"
      className="panel__input"
      type="number"
      value={props.value}
      min="0"
      max="9"
      onChange={props.onInputChange}
      id={'input-' + props.inputIndex}
    />
  );
};

export default Input;
