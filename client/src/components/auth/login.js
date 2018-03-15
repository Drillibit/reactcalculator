import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StartLoginUser } from '../../actions/user';
import { StartAddError } from '../../actions/flashErrors';

class Login extends Component {
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            name: '',
            password: '',
            errorText: '' 
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
            const error = {
                errorText: this.state.error
            }

            this.props.dispatch(StartLoginUser(user));
            this.props.dispatch(StartAddError(error));

        }
    };
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
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
                    <button>Login</button>
                </form>
                <Link to="/register">Register</Link>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.users,
        error: state.error
    }
}

export default connect(mapStateToProps)(Login);