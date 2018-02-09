import React from 'react';
import Form from './Form';
import { startAddMaterial } from '../../actions/material';
import { connect } from 'react-redux';
import CurrentMat from './CurrentMat';

const FormMain = (props) => {
    return (
        <div>
            <Form 
                onSubmit={(material) => {
                    props.dispatch(startAddMaterial(material));
                }}
            />
            <CurrentMat />
        </div>
    );
};

export default connect()(FormMain);