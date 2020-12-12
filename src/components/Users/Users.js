import React, {Component} from 'react';
import {UserService} from "../../services/UserService";
import User from "./User/User";
import './Users.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom'
import UserInfo from "./UserInfo/UserInfo";
import UserPosts from "./UserPosts/UserPosts";

class Users extends Component {
    userService = new UserService()
    state = {users: []}
    async componentDidMount() {
        let users = await this.userService.users()
        this.setState({users})
    }

    render() {
        let {users} = this.state
        let {match: {url}} = this.props
        return (
            <Switch>
            <div>

                    <div className={"users"}>
                        <div className="card">
                            <h3>Users</h3>
                            <ul className="list-group list-group-flush user-info">
                                    {
                                        users.map(user => <User user={user} />)
                                    }
                            </ul>
                        </div>
                        <Route exact={true} path={`${url}/:id`} render={(props) => {
                            let {match: {params: {id}}} = props
                            return <UserInfo key={id} id={id} />
                        }} />

                    </div>

                    <Route exact={true} path={`${url}/:id/posts`} render={(props) => {
                        let {match: {params: {id}}} = props
                        console.log(id)
                        return <UserPosts key={id} id={id} />
                    }} />

            </div>
            </Switch>
        );
    }
}

export default withRouter(Users);