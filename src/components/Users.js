import React, {Component} from 'react';
import User from "./User";

class Users extends Component {
    state = {users: []}

    deleteUser = (id) => {
        let {users} = this.state
        let index = users.findIndex((element) => element.id === id)
        users.splice(index, 1)
        this.setState({users})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => this.setState({users}))
    }

    render() {
        let {users} = this.state
        return (
            <div>
                {
                  users.map(user => <User key={user.id} user={user} deleteUser={this.deleteUser} />)
                }
            </div>
        );
    }
}

export default Users;