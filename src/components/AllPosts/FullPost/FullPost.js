import React, {Component} from 'react';

class FullPost extends Component {
    render() {
        let {title, body} = this.props.post !== undefined ? this.props.post : ""
        return (
            <div>
                <h5>{title}</h5>
                <p>{body}</p>
            </div>
        );
    }
}

export default FullPost;