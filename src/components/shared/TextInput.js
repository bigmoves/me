import React from 'react';
import { shape, func, object, string } from 'prop-types';

import { component } from './TextInput.css';

export default function TextInputFactory() {
  TextInput.contextTypes = {
    form: shape({
      submit: func.isRequired,
      inputChange: func.isRequired,
      values: object.isRequired
    }).isRequired
  };

  TextInput.propTypes = {
    InputType: string
  };

  TextInput.defaultProps = {
    As: 'input'
  };

  function TextInput({ As, name, placeholder }, context) {
    return (
      <div className={component}>
        <As
          type="text"
          name={name}
          placeholder={placeholder}
          value={context.form.values[name] || ''}
          onChange={event => {
            context.form.inputChange(name, event.target.value);
          }}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              context.form.submit();
            }
          }}
        />
      </div>
    );
  }

  return TextInput;
}
