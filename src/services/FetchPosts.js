export class FetchPosts {
    url = 'https://jsonplaceholder.typicode.com/posts'
    startId = 1
    fetchAllPosts = () => {
        return fetch(this.url)
            .then(value => value.json())
            .then(posts => {
                return posts
            })
    }

    fetchPostById = (id) => {
        return fetch(`${this.url}/${id}`).then(value => value.json()).then(value => value)
    }

    async fetchTwoPosts() {
        let firstPost = await this.fetchPostById(this.startId)
        let secondPost = await this.fetchPostById(++this.startId)
        ++this.startId
        return [firstPost, secondPost]
    }
}