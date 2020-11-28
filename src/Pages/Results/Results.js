import React from "react";
import classnames from 'classnames';
import { connect } from "react-redux";

import { 
  TextField,
  RadioButton,
  Button 
} from '../../components'
import {
  FIRST_THEME,
  SECOND_THEME,
  THIRD_THEME
 }  from '../../util/themeTypes'
import './style.scss'


class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  componentDidMount = () => {
    const { location: { state }, history } = this.props;
    if(!state)
      history.push('/');
  }


  render() {  
    const { location: { state }, history } = this.props;
    const { date, message, themeType } = state || {};
    const stylenames = classnames({
       classic: themeType === FIRST_THEME,
       ocean: themeType === SECOND_THEME,
       green: themeType === THIRD_THEME
    });
    const buttonType = themeType === SECOND_THEME ? "primary-cirlce" : "info";

    return (
      <div className="results">
        <div className={`container` + ' ' + stylenames}>
          <Button 
            id="back-bttn"
            color={buttonType}
            onClick={() => history.replace('/')}
          >
            {'Go Back'}
          </Button>
          <div>Your date: <span>{date}</span></div>
          <div>Confirm Message: <span>{message}</span></div>
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
 
};
export default connect(mapStateToProps, mapDispatchToProps)(Results);
