export const HOST = "http://localhost:4000"

const AUTH_ROUTES = `${HOST}/api/auth`
export const PRODUCTS_ROUTES = `${HOST}/admin/products`

export const REGISTER_THE_USER = `${AUTH_ROUTES}/register`
export const CHECK_LOGIN_USER = `${AUTH_ROUTES}/login`
export const LOGOUT = `${AUTH_ROUTES}/logout`
export const ADD_PRODUCT = `${PRODUCTS_ROUTES}/add-product`