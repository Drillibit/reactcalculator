import React, { Component } from 'react';

class FormRegister extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: props.name ? props.user.name : '',
            password: props.password ? props.user.password : '',
            password2: props.password ? props.user.password : '',
            status: props.status ? props.user.status : '',
            error: ''
        };
    };
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };
    onPasswordChnage = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };
    onPasswordChnage2 = (e) => {
        const password2 = e.target.value;
        this.setState(() => ({ password2 }));
    };
    onStatusChange = (e) => {
        const status = e.target.value;
        this.setState(() => ({ status }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.name || !this.state.password || !this.state.password2 || !this.state.status){
            this.setState(() => ({ error: 'Заполните все поля'}));
        } else if (this.state.password === this.state.password2){
            this.setState(() => ({ error: 'Пароли не совпадают'}));
        } else {
            this.setState(() => ({
                name: this.state.name,
                password: this.state.password,
                password2: this.state.password2,
                status: this.state.status
            }));
            this.props.onSubmit({
                ...this.state
            });
        }
    };
    
    render(){
        return (
            <div>
                {this.state.error && <p className="error">{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <label>Имя</label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.onNameChange}
                    />
                    <label>Статус</label>
                    <input 
                        type="text"
                        value={this.state.status}
                        onChange={this.onStatusChange}
                    />
                    <label>Пароль</label>
                    <input 
                        type="text"
                        value={this.state.password}
                        onChange={this.onPasswordChnage}
                    />
                    <label>Подтеврдите пароль</label>
                    <input
                        type="text"
                        value={this.state.password2}
                        onChange={this.onPasswordChnage2}
                    />
                    <button>Зарегестрироваться</button>
                </form>
            </div>
        );
    }
};

export default FormRegister;