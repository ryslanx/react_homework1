import React, {Component} from 'react';
import './User.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom'

class User extends Component {
    render() {
        let {user} = this.props
        let {match: {url}} = this.props
        return (
            <li className="list-group-item user-item">
                <div>{user.id}. {user.name}</div>
                <div>
                    <Link to={`${url}/${user.id}`} className={"btn btn-info custom-margin"}>Details</Link>
                    <Link to={`${url}/${user.id}/posts`} className={"btn btn-success"}>Posts</Link>
                </div>
            </li>
        );
    }
}

export default withRouter(User);