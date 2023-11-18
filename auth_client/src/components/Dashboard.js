import React from "react";
import { connect } from "react-redux";
import { logout } from "../actions/authActions";

function Dashboard({ isLoggedIn, userData, logout }) {
  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          
        </div>
      ) : (
        <p>Please login to view the dashboard.</p>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn,
    userData: state.auth.userData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
