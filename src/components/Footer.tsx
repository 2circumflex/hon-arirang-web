/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Flex, NavLink } from 'theme-ui'

import { maxWidth, horizontalPadding } from '../utils/const'

const Footer: React.FC = () => {
  return (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'center',
        background: 'white',
        width: '100%',
      }}
    >
      <Flex
        style={{
          flex: 1,
          maxWidth: maxWidth,
          padding: `0 ${horizontalPadding}`
        }}
      >
        <Flex
          style={{
            flex: 1,
            padding: `64px 0`,
            borderTop: '1px solid rgba(224, 224, 224, 1.00)'
          }}
        >
          <span>© 혼아리랑</span>
          {/* TODO(roy)푸터 내용 */}
        </Flex>
      </Flex>
    </footer>
  )
}

export default Footer
