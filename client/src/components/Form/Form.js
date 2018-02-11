import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            branch: props.material ? props.material.branch : '',
            name: props.material ? props.material.name : '',
            price: props.material ? props.material.price : '',
            error: ''
        }
    }
    onBranchChange = (e) => {
        const branch = e.target.value;
        this.setState(() => ({ branch }));
    };
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
        if(!this.state.branch || !this.state.name || !this.state.price){
            this.setState(() => ({error: 'Пожалуйста заполните все поля'}));
        } else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                branch: this.state.branch,
                name: this.state.name,
                price: this.state.price
            });
        }
    };
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <select value={this.state.branch} onChange={this.onBranchChange}>
                        <option>Выберите город</option>
                        {this.props.data.map((branch) => {
                            return  <option key={branch._id} value={branch.branchName}>{branch.branchName}</option>;
                        })}
                    </select>
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