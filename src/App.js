import React, {Component} from 'react';
import PostComponent from "./components/PostComponent";

let posts = null
class App extends Component {

    constructor() {
        super();
        this.state = {
            posts: false
        }
    }

    async componentDidMount() {
        await fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(json => posts = json)
        this.setState({
            posts: true
        })
    }

    render() {
        if (this.state.posts) {
            return (
                <div>
                    {
                        posts.map((post, index) => {
                            let classItem = index % 2 ? "odd" : "even"
                            return <PostComponent item={post} classSended={classItem} />
                        })
                    }
                </div>
            );
        } else {
            return (
                <div>Loading...</div>
            );
        }

    }
}

export default App;