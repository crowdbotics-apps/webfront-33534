import React, { createContext, useContext, useMemo } from 'react'

import axios, { AxiosInstance } from 'axios'

import { useAuth } from './Auth'

interface ApiContextData {
  api: AxiosInstance
}

const ApiContext = createContext({} as ApiContextData)

const ApiProvider: React.FC = ({ children }) => {
  const { token } = useAuth()

  const api = useMemo(() => {
    const headers: { [key: string]: string } = {}

    if (token) {
      headers.Authorization = `Bearer ${token}`
    }

    return axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URI,
      headers,
    })
  }, [token])

  return <ApiContext.Provider value={{ api }}>{children}</ApiContext.Provider>
}

export function useApi(): ApiContextData {
  const context = useContext(ApiContext)

  if (!context) {
    throw new Error(`useApi must be used within an ApiProvider!`)
  }

  return context
}

export default ApiProvider
