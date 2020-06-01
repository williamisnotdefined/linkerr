export const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value))

export const getItem = key => JSON.parse(localStorage.getItem(key))

export const removeItem = key => localStorage.removeItem(key)
