/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Flex } from 'theme-ui'

import { maxWidth, headerHeight, horizontalPadding } from '../utils/const'
import Header from './Header'
import Footer from './Footer'
import BlogTop from './BlogTop'

const Layout: React.FC = props => {
  return (
    <React.Fragment>
      <Header />
      <main
        style={{
          marginTop: headerHeight,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <BlogTop />
        <Flex
          style={{
            flex: 1,
            maxWidth: maxWidth,
            width: '100%',
            padding: `64px ${horizontalPadding}`,
            alignSelf: 'center'
          }}
        >
          {props.children}
        </Flex>
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
