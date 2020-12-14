export const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}

export const authHeaders = () => {
    const keyApi = 'eccd12aacf0646f8a45b1645b3d24b0c'
    return {
        ...defaultHeaders,
        Authorization: `Bearer ${keyApi}`
    }
}

export const methodType = {
    post: 'POST',
    get: 'GET',
    patch: 'PATCH',
    delete: 'DELETE'
}

export const toJson = (content) => {
    return JSON.stringify(content)
}