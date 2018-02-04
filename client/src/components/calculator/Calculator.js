import React, { Component } from 'react';
import { connect } from 'react-redux';


class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            material: '',
            space: '',
            angles: 0,
            result: ''
        };
    };
    onMaterialChange = (e) => {
        const material = e.target.value;
        this.setState(() => ({ material }));
    };
    onSpaceChange = (e) => {
        const space = e.target.value;
        this.setState(() => ({ space }));
    };
    onAngleChange = (e) => {
        const angles = e.target.value;
        this.setState(() => ({ angles }));
    };
    handleSubmit = (e) => {
        e.preventDefault();
        let angleSum = parseFloat(this.state.angles) * 250;
        let spaceSum = (parseFloat(this.state.space) * parseFloat(this.state.material)) + 75;
        let result = angleSum + spaceSum;
        this.setState(() => ({ result }));  
    };
    render(){
        return(
            <div>
                <h1>Calculator</h1>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.material} onChange={this.onMaterialChange}>
                        <option value="0">Выберете материал</option>
                        {this.props.materials.map((material) => {
                            return <option key={material._id} value={material.price}>{material.name}</option>
                        })}
                    </select>
                    <input 
                        type="text"
                        placeholder="площадь"
                        value={this.state.space}
                        onChange={this.onSpaceChange}
                    />
                    <input
                        type="text"
                        placeholder="углы"
                        value={this.state.angles}
                        onChange={this.onAngleChange}
                    />
                    <button>
                        Рассчитать
                    </button>
                </form>
                <p>{this.state.result}</p>
            </div>
        );
    };

};

const mapStateToProps = (state) => {
    return {
        materials: state.materials
    }
}

export default connect(mapStateToProps)(Calculator);