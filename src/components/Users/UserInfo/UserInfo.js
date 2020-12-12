import React, {Component} from 'react';
import {UserService} from "../../../services/UserService";
import "./UserInfo.css"

class UserInfo extends Component {
    state = {user: null}
    userService = new UserService()
    async componentDidMount() {
        let user = await this.userService.user(this.props.id)
        this.setState({user})
    }
    render() {
        let {user} = this.state
        console.log(user)
        return (
            <div className="card user-detail">
                <h3 className={"userinfo-title"}>{user === null ? "" : user.name}</h3>
                {
                    user === null ? "" : (<ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Email:</strong> {user.email}</li>
                    <li className="list-group-item"><strong>Phone:</strong> {user.phone}</li>
                    <li className="list-group-item"><strong>Website:</strong> {user.website}</li>
                    </ul>)
                }

            </div>
        );
    }
}

export default UserInfo;