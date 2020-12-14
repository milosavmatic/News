export const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}

export const authHeaders = () => {
    const keyApi = 'fc0f060cda6d4f7f95e2ca5e0bc6a6d7'
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

