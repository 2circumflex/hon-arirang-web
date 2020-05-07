/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import hero01 from '../images/hero-01.jpg'

const BlogTop: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '540px',
        display: 'flex',
        background: 'no-repeat center center',
        backgroundSize: 'cover',
        backgroundImage: `url(${hero01})`
      }}
    >

    </div>
  )
}

export default BlogTop
