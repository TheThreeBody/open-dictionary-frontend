import React, {Component} from 'react';
import {connect} from 'react-redux';
//Import css
import './Login.css';

import {Link} from 'react-router-dom';

export default class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <p>Please Log In</p>
                <form>
                  {"Email:"}<br/>
                  <input type="text" name="email"/><br/>
                  Password:<br/>
                  <input type="text" name="password"/>
                </form>
            </div>

        )
    }

}
