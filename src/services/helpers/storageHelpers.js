import CacheStore from 'react-native-cache-store';



export const arrayFromStorage = (key) => {
    const storedArray = CacheStore.get(key)
    if (storedArray && Array.isArray(storedArray) && storedArray.length > 0) {
        return storedArray
    }
    return null
}

export const arrayToStorage = (key, array) => {
    if (Array.isArray(array)) {
        CacheStore.set(key, array, CACHE_EXPIRY) // store to localstorage with expiry date
    }
}

export const objectFromStorage = (key) => {
    return CacheStore.get(key)
}

export const objectToStorage = (key, object) => {
    if (typeof object === 'object') {
        CacheStore.set(key, object, CACHE_EXPIRY) // store to localstorage with expiry date
    }
    CacheStore.set(key, object)
}

export const remove = (key) => {
    lscache.remove(key)
}

export const removeAll = () => {
    lscache.flush()
}

export default createBrowserHistory()