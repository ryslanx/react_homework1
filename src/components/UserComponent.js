import React, {Component} from 'react';
import "./User.css"
class UserComponent extends Component {
    render() {
        let user = this.props.user
        return (
            <div className={this.props.cls}>
                {user.name} {user.age} {user.status.toString()}
            </div>
        );
    }
}

export default UserComponent;