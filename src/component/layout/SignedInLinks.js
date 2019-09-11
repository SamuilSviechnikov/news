import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li><Link to='/create'>Create News</Link></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
        <li><Link to='/newspage' className="btn btn-floating pink lighten-1">
          {props.profile.initials}
          </Link></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)