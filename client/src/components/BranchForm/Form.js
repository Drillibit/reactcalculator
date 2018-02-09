import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            branchName: props.branch ? props.branch.branchName : '',
            anglePrice: props.branch ? props.branch.anglePrice : '',
            cutPrice: props.barnch ? props.branch.cutPrice : '',
            customStitch: props.branch ? props.branch.customStitch : '',
            stitchAlignment: props.branch ? props.branch.stitchAlignment : '',
            multiMaterial: props.branch ? props.branch.multiMaterial : '',
            error: ''
        };
    }
    onMultiMaterialChange = (e) => {
        const multiMaterial = e.target.value;
        this.setState(() => ({ multiMaterial }));
    };

    onStitchAlignMentChange = (e) => {
        const stitchAlignment = e.target.value;
        this.setState(() => ({ stitchAlignment }));
    };

    onCustomStitchChange = (e) => {
        const customStitch = e.target.value;
        this.setState(() => ({ customStitch }));
    };

    onCutPriceChange = (e) => {
        const cutPrice = e.target.value;
        this.setState(() => ({ cutPrice }));
    };

    onAnglePriceChange = (e) => {
        const anglePrice = e.target.value;
        this.setState(() => ({ anglePrice }));
    };
    onBranchNameChange = (e) => {
        const branchName = e.target.value;
        this.setState(() => ({ branchName }));
    };
    onSubmit = (e) => {
        e.peventDefault();
        if (!this.state.branchName || !this.state.anglePrice || !this.state.customStitch || !this.state.multiMaterial || !this.state.cutPrice || !this.state.stitchAlignment){
            this.setState({ error: 'Пожалуйста заполните все поля' });
        } else {
            this.setState(() => ({ error: ''}));
            this.props.onSubmit({
                branchName: this.state.branchName,
                anglePrice: this.state.anglePrice,
                cutPrice: this.state.cutPrice,
                customStitch: this.state.cutPrice,
                stitchAlignment: this.state.stitchAlignment,
                multiMaterial: this.state.multiMaterial
            })
        }
    };
    render() {
        return (
            <div>
                <h1>Form</h1>
                {this.state.error && <p>{this.state.error}</p>}
            </div>
        );
    }; 
};