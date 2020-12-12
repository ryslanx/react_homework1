import React, {Component} from 'react';

class UserPost extends Component {
    render() {
        let {post} = this.props
        return (
            <li className="list-group-item">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </li>
        );
    }
}

export default UserPost;