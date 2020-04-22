/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

const Index: React.FC = () => {
  return (
    <Layout>
      <SEO title='Home' />
      <p>혼아리랑</p>
    </Layout>
  )
}

export default Index
