import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'

import { decode } from 'jsonwebtoken'

import { TokenPayload } from '~/interfaces/api/TokenPayload'
import { removeCookie, setCookie } from '~/helpers/cookies'
import { RouteName } from '~/routes/paths'
import Router from '~/routes/router'

interface SignInProps {
  token: string
  redirect?: boolean
}

interface SignOutProps {
  redirect?: boolean
}

interface AuthContextData {
  token: string | null
  user: TokenPayload['user'] | null
  signIn: (props: SignInProps) => void
  signOut: (props?: SignOutProps) => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthProviderProps {
  token: string | null
}

const AuthProvider: React.FC<AuthProviderProps> = ({
  children,
  token: defaultToken,
}) => {
  // State for token.
  const [token, setToken] = useState<string | null>(defaultToken)

  // State for user.
  const [user, setUser] = useState<TokenPayload['user'] | null>(() => {
    if (defaultToken) {
      const { user } = decode(defaultToken) as TokenPayload

      return user
    }

    return null
  })

  // When change the token, decode and set the user.
  useEffect(() => {
    ; (() => {
      try {
        const { user } = decode(token as string) as TokenPayload
        setUser(user || null)
      } catch (err) {
        setUser(null)
      }
    })()
  }, [token])

  // Sign in method to set token state.
  const signIn = useCallback(
    ({ token, redirect = false }: SignInProps) => {
      try {
        // Set cookies.
        setCookie('token', token)

        // Set state.
        setToken(token)

        const { user } = decode(token as string) as TokenPayload
        Router.pushRoute(RouteName.HOME);

      } catch (err) {
        throw new Error(`Não foi possível autenticar`)
      }
    },
    [],
  )

  // Sign out method to clear token state.
  const signOut = useCallback(({ redirect = false }: SignOutProps = {}) => {
    // Remove cookies.
    removeCookie('token')

    // Set state.
    setToken(null)

    // Redirect.
    window.location.href = "/entrar";
    // Router.pushRoute(RouteName.SYSTEM_PAGE_LOGIN)
  }, [token])

  return (
    <AuthContext.Provider value={{ token, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error(`useAuth should be used within an AuthProvider!`)
  }

  return context
}

export { useAuth }

export default AuthProvider
