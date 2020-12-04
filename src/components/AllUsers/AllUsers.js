import React, {Component} from 'react';
import Post from "../Post/Post";
import {FetchPosts} from "../../services/FetchPosts";

class AllUsers extends Component {
    state = {posts: []}
    fetchPosts = new FetchPosts()

    render() {
        let {posts} = this.state
        let deleteFunc = (id) => {
            console.log(this.fetchPosts)
            let index = posts.findIndex(element => {
                return element.id === id
            })
            this.state.posts.splice(index, 1)
            this.setState({posts: this.state.posts})
        }
        return (
            <div>
                <button onClick={() => this.showTwo()}>Show two users</button>
                {
                    posts.map(post => {
                        console.log(posts)
                        console.log(post)
                        return <Post post={post} key={post.id} deleteFunc={deleteFunc}/>
                    })
                }
            </div>
        );
    }

    async showTwo() {
        let result = await this.fetchPosts.fetchTwoPosts()
        this.state.posts.push(result[0])
        this.state.posts.push(result[1])
        this.setState({posts: this.state.posts})
    }

    // componentDidMount() {
    //     this.fetchPosts.fetchAllPosts().then(value => this.setState({posts: value}))
    // }
}

export default AllUsers;