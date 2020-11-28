import validate from 'validate.js';

const constraints = {
  text_field: {
    presence: {
      allowEmpty: false,
    },
    length: 256,
  }
};

export default values => validate(values, constraints);
