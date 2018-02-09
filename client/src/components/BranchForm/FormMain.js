import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import addBranch from '../../actions/branch';

const FormMain = (props) => {
    return (
        <div>
            <h1>Branch Form</h1>
            <Form 
                onSubmit={(branch) => {
                    props.dispatch(addBranch(branch));
                }}
            />
        </div>
    );
};

export default connect()(FormMain);