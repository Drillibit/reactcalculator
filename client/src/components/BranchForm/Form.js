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
            curvePrice: props.branch ? props.barnch.curvePrice : '',
            error: ''
        };
    }
    onCurvePriceChange = (e) => {
        const curvePrice = e.target.value;
        this.setState(() => ({ curvePrice }));
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
        e.preventDefault();
        if (!this.state.branchName 
            || 
            !this.state.anglePrice 
            || 
            !this.state.customStitch 
            || 
            !this.state.multiMaterial 
            || 
            !this.state.cutPrice 
            || 
            !this.state.stitchAlignment
            ||
            !this.state.curvePrice){
            this.setState(() => ({ error: 'Пожалуйста заполните все поля' }));
        } else {
            this.setState(() => ({ error: ''}));
            this.props.onSubmit({
                branchName: this.state.branchName,
                anglePrice: this.state.anglePrice,
                cutPrice: this.state.cutPrice,
                customStitch: this.state.cutPrice,
                stitchAlignment: this.state.stitchAlignment,
                multiMaterial: this.state.multiMaterial,
                curvePrice: this.state.curvePrice
            })
        }
    };
    render() {
        return (
            <div>
                <h1>Form</h1>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Город</label>
                        <input
                            type="text"
                            placeholder="Город"
                            autoFocus
                            value={this.state.branchName}
                            onChange={this.onBranchNameChange}
                        />
                    </div>
                    <div>
                        <label>Стоимость угла</label>
                        <input
                            type="number"
                            placeholder="Стоимость доп угла"
                            value={this.state.anglePrice}
                            onChange={this.onAnglePriceChange}
                        />
                    </div>
                    <div>
                        <label>Стоимость Выреза</label>
                        <input
                            type="number"
                            placeholder="Вырез"
                            value={this.state.cutPrice}
                            onChange={this.onCutPriceChange}
                        />
                    </div>
                    <div>
                        <label>Стоимость Кривой</label>
                        <input
                            type="number"
                            placeholder="Кривая"
                            value={this.state.curvePrice}
                            onChange={this.onCurvePriceChange}
                        />
                    </div>
                    <div>
                    <label>Стоимость заданного шва</label>
                        <input
                            type="number"
                            placeholder="Заданный шов"
                            value={this.state.customStitch}
                            onChange={this.onCustomStitchChange}
                        />
                        <span>%</span>
                    </div>
                    <div>
                        <label>Стоимость центровки швов</label>
                        <input
                            type="number"
                            placeholder="Центровка швов"
                            value={this.state.stitchAlignment}
                            onChange={this.onStitchAlignMentChange}
                        />
                        <span>%</span>
                    </div>
                    <div>
                    <label>Стоимость многофактурности</label>
                        <input
                            type="number"
                            placeholder="Многофактурность"
                            value={this.state.multiMaterial}
                            onChange={this.onMultiMaterialChange}
                        />
                        <span>%</span>
                    </div>
                    <button>
                        Добавить город
                    </button>
                </form>
            </div>
        );
    }; 
};

export default Form;