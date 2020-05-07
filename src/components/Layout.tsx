/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import { maxWidth } from '../utils/const'
import Header from './Header'
import Footer from './Footer'
import BlogTop from './BlogTop'

const Layout: React.FC = props => {
  return (
    <React.Fragment>
      <Header />
      <BlogTop />
      <div
        style={{
          margin: '0 auto',
          maxWidth: maxWidth,
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
