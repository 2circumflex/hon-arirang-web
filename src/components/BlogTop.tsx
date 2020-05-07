/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'

import { Flex } from 'theme-ui'
import { maxWidth, horizontalPadding } from '../utils/const'
import hero01 from '../images/hero-01.jpg'

const BlogTop: React.FC = () => {
  // TODO(roy): hero 이미지 여러개 랜덤으로 보여주기
  return (
    <div
      style={{
        width: '100%',
        height: '540px',
        display: 'flex',
        justifyContent: 'center',
        background: 'no-repeat center center',
        backgroundSize: 'cover',
        backgroundImage: `url(${hero01})`
      }}
    >
      <Flex
        style={{
          flex: 1,
          alignItems: 'center',
          padding: `0 ${horizontalPadding}`,
          maxWidth: maxWidth
        }}
      >
        <h2 style={{ color: 'white '}} >
          이런 걸 보고 간지라고 하는 거다 쉐퀴들아!!!
        </h2>
        {/* // TODO(roy): 문구 넣기 */}
      </Flex>
    </div>
  )
}

export default BlogTop
