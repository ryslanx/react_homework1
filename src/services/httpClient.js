class HTTPClient {
    get(url, params) {
        return fetch(url, params)
    }
}

export const httpClient = new HTTPClient()