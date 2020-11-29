import React from "react";
import classnames from 'classnames';
import { connect } from "react-redux";
import goBackImg from '../../assets/back-button.svg'

import { 
  Icon,
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
          <Icon 
            src={goBackImg}
            type="go-back-btnn"
            height={50}
            width={50}
            onClick={() => history.replace('/')}
            className="back-bttn"
          />
          <div className="date">Your date: <span>{date}</span></div>
          <div className="message">Your Message: <span>{message}</span></div>
          <Button 
            id="back-bttn"
            color={buttonType}
            onClick={() => window.location.href = "https://github.com/Osvaldo111/react-form-date"}
          >
            {'Review code on GitHub'}
          </Button>
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
