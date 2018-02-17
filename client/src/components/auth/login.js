import React, { Component } from 'react';
import { connect } from 'react-redux';
import StartAddUser from '../../actions/user';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            password: '',
            error: ''
        }
    };
    onNameChange = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }));
    };
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.name || !this.state.password){
            this.setState(() => ({ error: 'Заполните все поля' }));
        } else {
            const user = {
                name: this.state.name,
                password: this.state.password
            };
            dispatch(StartAddUser(user));
        }
    };
    render(){
        return(
            <div>
                <form>
                    <label>Имя</label>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.onNameChange} 
                    />
                    <label>Пароль</label>
                    <input 
                        type="text"
                        value={this.state.value}
                        onChange={this.onPasswordChange}
                    />
                </form>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(Login);