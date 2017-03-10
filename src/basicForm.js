import React, { Component, PropTypes } from 'react';
import { Form, FormError } from 'react-redux-simple-validate';

export default class BasicForm extends Component {
  constructor() {
    super();
    this.validation = {
      rules: {
        exampleInput: {
          required: true
        }
      },
      messages: {
        exampleInput: {
          required: 'This is required'
        }
      }
    };
    this.handleValidForm = this.handleValidForm.bind(this);
  }

  handleValidForm(data) {
    console.log('call a Redux thunk here to submit your data to the server!', data);
  }

  render() {
    return (
      <div>
        <hr />
        <Form
          formName={this.props.name}
          handleValidForm={this.handleValidForm}
          validation={this.validation}
        >
          <div>
            <input type="text" name="exampleInput" value="" />
            <button className="button">Submit</button>
          </div>
          <div>
            <FormError forInput="exampleInput" />
          </div>
        </Form>
      </div>
    );
  }
}

BasicForm.propTypes = {
  name: PropTypes.string.isRequired
};
