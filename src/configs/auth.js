export default {
  meEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
  loginEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
  logoutEndpoint: `${process.env.NEXT_PUBLIC_API_URL}/auth/logout`

  // registerEndpoint: '/jwt/register',
  // storageTokenKeyName: 'accessToken',
  // onTokenExpiration: 'refreshToken' // logout | refreshToken
}
