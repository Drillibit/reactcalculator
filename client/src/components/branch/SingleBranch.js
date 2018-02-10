import React from 'react';
import { connect } from 'react-redux';

const SingleBranch = (props) => {
    const state = {...props.location.state};
    return (
        <div>
            <p>Филиал {state.branchName}</p>
        </div>
    );
};

export default SingleBranch;