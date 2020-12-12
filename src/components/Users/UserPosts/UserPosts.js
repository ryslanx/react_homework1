import React, {Component} from 'react';
import {UserService} from "../../../services/UserService";
import UserPost from "./UserPost/UserPost";

class UserPosts extends Component {
    userService = new UserService()
    state = {posts: []}
    async componentDidMount() {
        let userPosts = await this.userService.userPosts(this.props.id)
        this.setState({posts: userPosts})
    }

    render() {
        let {posts} = this.state
        return (
            <div className={"user-posts"}>
                <div className="card ">
                        <ul className="list-group list-group-flush">
                            {
                                posts.map(post => <UserPost post={post} />)
                            }
                        </ul>
                </div>
            </div>
        );
    }
}

export default UserPosts;