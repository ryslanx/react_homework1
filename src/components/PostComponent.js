import React, {Component} from 'react';
import './Post.css'
class PostComponent extends Component {
    render() {
        let post = this.props.item
        return (
            <div className={this.props.classSended}>
                <h1>
                    {
                        post.title
                    }
                </h1>
                <p>
                    {
                        post.body
                    }
                </p>
            </div>
        );
    }
}

export default PostComponent;