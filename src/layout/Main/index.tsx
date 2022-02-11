import React, { useMemo } from 'react'

import { useRouter } from 'next/router'

import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import getRoute from '~/routes/getRoute'

import { MainContent } from './styles'

export const Main: React.FC = ({ children }) => {
  const { asPath: currentPath } = useRouter()

  const currentRoute = useMemo(() => getRoute(currentPath), [currentPath])

  return (
    <>
      {currentRoute?.pattern !== '/get-started' && <Header />}

      <MainContent>{children}</MainContent>

      {currentRoute?.pattern !== '/get-started' && <Footer />}
    </>
  )
}
