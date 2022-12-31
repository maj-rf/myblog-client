import { TUser } from '../types/user'
import { useState, createContext, useContext } from 'react'

type AuthProps = {
  children: React.ReactNode
}

type AuthContextType = {
  user: TUser | null
  login: (user: TUser) => void
  logout: () => void
  register: (user: TUser) => void
}
const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<TUser | null>(null)

  const login = (user: TUser) => {
    setUser(user)
  }

  const logout = () => {
    setUser(null)
  }

  const register = (user: TUser) => {
    console.log('register')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
