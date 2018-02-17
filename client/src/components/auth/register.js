import React from 'react';
import { connect } from 'react-redux';
import {StartAddUser} from '../../actions/user';
import FormRegister from './FormRegister';

const Register = (props) => {
    return (
        <div>
            <FormRegister 
                onSubmit={(user) => {
                    props.dispatch(StartAddUser(user));
                }}
            />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Register);