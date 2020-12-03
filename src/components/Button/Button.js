import React, {Component} from 'react';

class Button extends Component {
    render() {
        let {postId, func} = this.props
        return (

            <div>
                <button onClick={() => func(postId)}>choose</button>
            </div>
        );
    }
}

export default Button;