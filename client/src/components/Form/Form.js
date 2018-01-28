import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.material ? props.material.name : '',
            price: props.material ? props.material.price : ''
        }
    }
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };
    onPriceChange = (e) => {
        const price = e.target.value;
        this.setState(() => ({ price }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            name: this.state.name,
            price: this.state.price
        });
    };
    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text"
                        placeholder="Название материала"
                        autoFocus
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <input 
                        type="text"
                        placeholder="Цена"
                        value={this.state.price}
                        onChange={this.onPriceChange}
                    />
                    <button>
                        Добавить Материал
                    </button>
                </form>
            </div>
        );
    }
};

export default Form;