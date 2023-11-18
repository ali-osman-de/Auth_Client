import React from "react";
import { connect } from "react-redux";
import { loginSuccess } from "../actions/authActions";

function LoginPage(props) {

  return (
    <div>

    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: (userData) => dispatch(loginSuccess(userData)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
