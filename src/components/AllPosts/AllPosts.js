import React, {Component} from 'react';
import UserServices from "../../services/userServices";
import Post from "./Post/Post";
import './AllPosts.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom'
import FullUser from "../AllUsers/FullUser/FullUser";
import FullPost from "./FullPost/FullPost";

class AllPosts extends Component {
    userService = new UserServices()
    state = {posts: []}

    async componentDidMount() {
        let posts = await this.userService.posts()
        this.setState({posts})
    }

    render() {
        let {posts} = this.state
        let {match: {url}} = this.props
        return (
            <div>
                <div className={"all-posts-router"}>
                    <Switch>
                        <Route path={`${url}/:id`} render={(props) => {
                            let {match: {params: {id}}} = props
                            let post = posts.filter(post => post.id === +id)
                            console.log(post)
                            return <FullPost post={post[0]} id={id} />
                        }} />
                    </Switch>
                </div>
                {
                    posts.map(post => <Post post={post} key={post.id} />)
                }

            </div>
        );
    }
}

export default withRouter(AllPosts);