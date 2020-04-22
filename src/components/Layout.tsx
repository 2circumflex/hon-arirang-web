/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout: React.FC = props => {
  return (
    <React.Fragment>
      <Header />
      <div
        style={{
          margin: '0 auto',
          maxWidth: 768,
          padding: '0 1rem',
        }}
      >
        <main>{props.children}</main>
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
