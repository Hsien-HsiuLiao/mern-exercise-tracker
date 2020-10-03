import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

export default class CreateUsers extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
                username: e.target.value
        });
    }
    
    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            
        }

        console.log(user);

        this.setState({
            username: ''
        })
    }

    render() {
        return (
            <div>
                create users List
            </div>       
        )
    }
}