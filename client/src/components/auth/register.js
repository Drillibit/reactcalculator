import React from 'react';
import { connect } from 'react-redux';
import {StartAddUser} from '../../actions/user';
import FormRegister from './FormRegister';
import { Link } from 'react-router-dom';

const Register = (props) => {
    return (
        <div>
            <FormRegister 
                onSubmit={(user) => {
                    props.dispatch(StartAddUser(user));
                }}
            />
            <Link to="/">Login</Link>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Register);