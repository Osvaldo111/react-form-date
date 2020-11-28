import React from "react";
import validate from './validations';
import moment from 'moment';
import { withRouter } from 'react-router-dom';


import { connect } from "react-redux";
import { actionFunction } from "../../actions"; 
import { reduxForm, Form } from 'redux-form';
import { SingleDatePicker } from 'react-dates';
import {
  FIRST_THEME,
  SECOND_THEME,
  THIRD_THEME
 }  from '../../util/themeTypes'
import 'react-dates/initialize';

import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overwrite.css'


import { 
  TextField,
  RadioButton,
  Button 
} from '../../components'
import './style.scss'


@reduxForm({ form: "activity-page", validate, enableReinitialize: true})
class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new moment(),
      focused: false,
      themeType: FIRST_THEME
    };
  }



  componentDidMount = () => {
    const { reset } = this.props;
    reset();
  }

  handleOnChange = (themeType) => {
    this.setState({themeType})
  }
  
  onSubmit = (values) => {
      const { date , themeType } = this.state;
      const { text_field } = values;
      const { history } = this.props;

      const data = {
        message: text_field,
        date: moment(date).format('DD MMM YYYY'),
        themeType: themeType
      }
      history.push('/results', { ...data})

  }

  render() {

    const { handleSubmit, valid } = this.props;
    const { date, focused, themeType } = this.state;

    return (
      <div className="activity">
       <div className="container">
          <Form id="checkinForm" method="post" onSubmit={handleSubmit(this.onSubmit)} autoComplete="off">
          <h2>Welcome</h2>
          <p>Please select a date *</p>
          <SingleDatePicker
            date={date} // momentPropTypes.momentObj or null
            onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
            focused={focused} // PropTypes.bool
            onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            numberOfMonths={1}
            readOnly
            id="date_picker" // PropTypes.string.isRequired,
          />
          <p>Enter your message *</p>
          <div className="text-field-container">
            <TextField 
              id="text_field"
              name="text_field"
              multiLine
            />
          </div>
          <p>Choose a theme *</p>
          <div className="theme-container">
            <RadioButton 
              id="first-theme"
              name="first-theme"
              labelText={'Classic'}
              checked={themeType === FIRST_THEME}
              onChange={() => this.handleOnChange(FIRST_THEME)}
            />
            <RadioButton 
              id="second-theme"
              name="second-theme"
              labelText={'Ocean'}
              checked={themeType === SECOND_THEME}
              onChange={() => this.handleOnChange(SECOND_THEME)}
            />
            <RadioButton 
              id="Third-theme"
              name="Third-theme"
              labelText={'Green'}
              checked={themeType === THIRD_THEME}
              onChange={() => this.handleOnChange(THIRD_THEME)}
      
            />
          </div>
          <Button
              id="footer-button"
              color="info"
              type="submit"
              disabled={!valid}
            >
              {'Submit'}
            </Button>
          </Form>
       </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    storeProps: state
  };
}
const mapDispatchToProps = {
  actionFunction
};
export default connect(mapStateToProps, mapDispatchToProps)(Activity);
