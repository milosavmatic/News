export const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}

export const authHeaders = () => {
    const keyApi = '0c8db6d6176d49438e3f87405a883b72'
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