import React, {Component} from 'react';
import Button from "../Button/Button";

class User extends Component {
    render() {
        let {post, onClickDown} = this.props
        return (
            <div>
                <div>{post.id} - {post.title}</div>
                <Button postId={post.id} func={onClickDown} />
            </div>
        );
    }
}

export default User;