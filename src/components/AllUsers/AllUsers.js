import React, {Component} from 'react';
import User from "../User/User";

class AllUsers extends Component {
    state = {posts: [], found: null}
    onClickDown = (id) => {
        let {posts} = this.state
        let found = posts.find(post => post.id === id)
        this.setState({found})
    }
    render() {
        let {posts, found} = this.state
        return (
            <div>
                {
                    // eslint-disable-next-line array-callback-return
                    posts.map(post => {
                        if (post.id < 21) {
                            return <User post={post} key={post.id} onClickDown={this.onClickDown}/>
                        }
                    })
                }
                {
                    found && <User post={found} />
                }
            </div>
        );
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(posts => {console.log(posts)
                this.setState({posts})})
    }
}

export default AllUsers;