// ** React Imports
import { useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

// ** Hooks Import
import { useAuth } from 'src/hooks/useAuth'

const AuthGuard = props => {
  const { children, fallback } = props
  const auth = useAuth()
  const router = useRouter()

  // const usrData = JSON.parse(window.localStorage.getItem('userData'))

  // useEffect(() => {
  //   const usrData = JSON.parse(window.localStorage.getItem('userData'))

  //   auth.user = usrData
  // }, [])

  useEffect(
    () => {
      if (!router.isReady) {
        return
      }

      // const usrData = JSON.parse(window.localStorage.getItem('userData'))
      // if (auth.user === null && !usrData) {
      if (auth.user === null && !window.localStorage.getItem('userData')) {
        router.push('/login')

        // auth.user = usrData

        // if (auth.user === null && !window.localStorage.getItem('userData')) {

        if (router.asPath !== '/') {
          router.replace({
            pathname: '/login',
            query: { returnUrl: router.asPath }
          })
        } else {
          router.replace('/login')
        }
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.route]
  )

  if (auth.loading || auth.user === null) {
    // console.log('auth.loading || auth.user === null')

    return fallback
  }

  return <>{children}</>
}

export default AuthGuard
