import React from 'react';
import Form from './Form';
import { startAddMaterial } from '../../actions/material';
import { connect } from 'react-redux';
import CurrentMat from './CurrentMat';

const FormMain = (props) => {
    return (
        <div>
            <Form 
                data={props.branches}
                onSubmit={(material) => {
                    props.dispatch(startAddMaterial(material));
                }}
            />
            <CurrentMat />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        branches: state.branches
    }
}

export default connect(mapStateToProps)(FormMain);