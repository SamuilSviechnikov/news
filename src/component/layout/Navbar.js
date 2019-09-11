import React from 'react';
import './logo/logo.css';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks />;
  return (
      <nav className='nav-wrapper red darken-1'>
        <div className="container">
          <Link className='brand-logo logo' exact to="/NewsPage"><strong>News</strong> site</Link>
            { links }
        </div>
      </nav>
  )
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth, 
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Navbar);