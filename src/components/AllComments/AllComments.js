import React, {Component} from 'react';
import UserServices from "../../services/userServices";
import Comment from "./Comment/Comment";
import './AllComments.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom'
import FullComment from "./FullComment/FullComment";

class AllComments extends Component {

    userService = new UserServices()
    state = {comments: []}
    async componentDidMount() {
        let comments = await this.userService.comments()
        this.setState({comments})
    }

    render() {
        let {comments} = this.state
        let {match: {url}} = this.props
        return (
            <div>
                <div className={'all-comments-router'}>
                    <Route path={`${url}/:id`} render={(props) => {
                        let {match: {params: {id}}} = props
                        let comment = comments.filter(comment => comment.id === +id)
                        return <FullComment comment={comment[0]} />
                    }} />
                </div>
                {
                    comments.map(comment => <Comment comment={comment} />)
                }
            </div>
        );
    }
}

export default withRouter(AllComments);