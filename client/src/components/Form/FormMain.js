import React from 'react';
import Form from './Form';
import { startAddMaterial } from '../../actions/material';
import { connect } from 'react-redux';

const FormMain = (props) => {
    return (
        <div>
            <Form 
                onSubmit={(material) => {
                    props.dispatch(startAddMaterial(material));
                }}
            />
        </div>
    );
};

export default connect()(FormMain);