import React from 'react'

import { Link } from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1 className="text-center">Oops </h1>
      <h2 className="text-center">
        Sad, sad, sad...... I know you did not mean to, but things happen.{' '}
        <br /> Never mind, there is always a{' '}
        <Link to="/">
          <button role="button" className="rectButton">
            HOME
          </button>
        </Link>{' '}
        for everyone
      </h2>
    </div>
  </Layout>
)

export default NotFoundPage
