export const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}

export const authHeaders = () => {
    const keyApi = '8ac195c35e434f0fbfdb46a0953e36e2'
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