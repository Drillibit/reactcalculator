import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { startAddBranch } from '../../actions/branch';

const BranchFormMain = (props) => {
    return (
        <div>
            <h1>Branch Form</h1>
            <Form 
                onSubmit={(branch) => {
                    props.dispatch(startAddBranch(branch));
                }}
            />
        </div>
    );
};

export default connect()(BranchFormMain);