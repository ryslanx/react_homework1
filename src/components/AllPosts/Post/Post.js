import React, {Component} from 'react';
import "./Post.css";
import {Link, withRouter} from "react-router-dom";

class Post extends Component {
    render() {
        let {title, body, id} = this.props.post
        let {match: {url}} = this.props
        return (
            <div className={"post"}>
                <h3>{title}</h3>
                <p>{body}</p>
                <Link to={`${url}/${id}`}>details</Link>
            </div>
        );
    }
}
export default withRouter(Post);
// export default Post;