import React, { Component } from 'react';


class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {
            space: '',
            angles: '',
            result: ''
        };
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
        let spaceSum = (parseFloat(this.state.space) * 395) + 75;
        let result = angleSum + spaceSum;
        this.setState(() => ({ result }));  
    };
    render(){
        return(
            <div>
                <h1>Calculator</h1>
                <form onSubmit={this.handleSubmit}>
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

export default Calculator;