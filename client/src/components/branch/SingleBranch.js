import React, { Component } from 'react';
import { connect } from 'react-redux';

class SingleBranch extends Component {
    // const state = {...props.location.state};
    constructor(props){
        super(props);
        this.state = {
            space: 0,
            angle: 0,
            curve: 0,
            cut: 0,
            customStitch: 0,
            stitchAlignment: 0,
            multiMaterial: 0,
            result: 0
        };
    };
    onSpaceChange = (e) => {
        const space = e.target.value;
        this.setState(() => ({ space }));
    };
    onMultiMaterialChange = (e) => {
        const multiMaterial = e.target.value;
        this.setState(() => ({ multiMaterial }));
    };
    onStitchAlignmentChange = (e) => {
        const stitchAlignment = e.target.value;
        this.setState(() => ({ stitchAlignment }));
    };
    onCustomStitchChange = (e) => {
        const customStitch = e.target.value;
        this.setState(() => ({ customStitch }));
    };
    onCutChange = (e) => {
        const cut = e.target.value;
        this.setState(() => ({ cut }));
    };
    onCurveChange = (e) => {
        const curve = e.target.value;
        this.setState(() => ({ curve }));
    };
    onAngleChange = (e) => {
        const angle = e.target.value;
        this.setState(() => ({ angle }));
    };
    // handleSubmit = (e) => {
    //     e.preventDefault();
    //     let raw = this.state.space * this.state.material;
    //     let angleSum = ((this.state.angle > 4) ? ((this.state.angle - 4) * this.))
    // };

    render(){
        //stores initial branch data
        const data = {...this.props.location.state};
        return (
            <div>
                <p>Филиал {data.branchName}</p>
                <section>
                    <div className="wrapper">
                        <div className="container">
                            <div className="group">
                                <select value={this.state.material} onChange={this.onMaterialChange}>
                                    <option value="0">Выберете материал</option>
                                    {this.props.materials.map((material) => {
                                        return (material.branch === data.branchName) ? (<option key={material._id} value={material.price}>{material.name}</option>) : '';
                                    })}
                                </select>
                            </div>
                            <div className="group">
                                <label>Площадь</label>    
                                <input
                                    type="text"
                                    placeholder="площадь"
                                    value={this.state.space}
                                    onChange={this.onSpaceChange}
                                />
                                <label>Углы</label>
                                <input
                                    type="text"
                                    placeholder="углы"
                                    value={this.state.angles}
                                    onChange={this.onAngleChange}
                                />
                            </div>
                            <div className="group">
                                <label>Углы {data.anglePrice}:</label>
                                <input 
                                    type="number" 
                                    value={this.state.angle}
                                    onChange={this.onAngleChange} 
                                />
                            </div>
                            <div className="group">
                                <label>Кривая {data.curvePrice}:</label>
                                <input 
                                    type="number"
                                    value={this.state.curve}
                                    onChange={this.onCurveChange} 
                                />
                            </div>
                            
                            <div className="group">
                                <label>Вырез {data.cutPrice}:</label>
                                <input 
                                    type="number" 
                                    value={this.state.cut} 
                                    onChange={this.onCutChange}
                                />
                            </div>
                            <div className="group">
                                <label>Заданный шов {data.customStitch}:</label>
                                <input 
                                    type="number" 
                                    value={this.state.customStitch}
                                    onChange={this.onCustomStitchChange} 
                                />
                            </div>
                            <div className="group">
                                <label>Центровка швов {data.stitchAlignment}:</label>
                                <input 
                                    type="number" 
                                    value={this.state.stitchAlignment}
                                    onChange={this.onStitchAlignmentChange} 
                                />
                            </div>
                            <div className="group">
                                <label>Многофактурность {data.multiMaterial}:</label>
                                <input 
                                    type="number" 
                                    value={this.state.multiMaterial} 
                                    onChange={this.onMultiMaterialChange} />
                            </div>
                        </div>
                        <p>Результат: {this.state.result}</p>
                    </div>
                </section>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        materials: state.materials
    }
}

export default connect(mapStateToProps)(SingleBranch);