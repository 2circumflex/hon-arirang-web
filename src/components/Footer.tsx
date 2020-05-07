/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import { maxWidth } from '../utils/const'

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        background: 'gray',
        height: '70px'
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: maxWidth
        }}
      >
        {/* TODO(roy)푸터 내용 */}
      </div>
    </footer>
  )
}

export default Footer
