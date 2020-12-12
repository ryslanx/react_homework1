export class UserService {
    async users() {
        return await fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
    }
    async user(id) {
        return await fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
    }
    async userPosts(id) {
        return await fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
            .then(value => value.json())
    }
}