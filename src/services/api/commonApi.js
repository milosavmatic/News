export const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}

export const authHeaders = () => {
    const keyApi = '0b088f7f7d834a1b9f3f064da2ab1406'
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