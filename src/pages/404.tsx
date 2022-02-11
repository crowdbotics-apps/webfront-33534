import React from 'react'

import ErrorPage from './_error'

const NotFoundPage: React.FC = () => {
  return <ErrorPage statusCode={404} />
}

export default NotFoundPage
