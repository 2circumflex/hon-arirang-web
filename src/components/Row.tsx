/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Flex, NavLink } from 'theme-ui'
import { format } from 'date-fns'

import { ContentfulPost } from '../../types/graphql-types'

interface RowProps {
  contentfulPost: ContentfulPost
}

const Row: React.FC<RowProps> = props => {
  const { contentfulPost } = props
  const { slug, title, createdAt } = contentfulPost

  const createAtDate = new Date(createdAt)
  const createdAtDateString = format(createAtDate, 'yyyy년 MM월 dd일 hh시 mm분')
  return (
    <Flex>
      <Flex
        sx={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <NavLink href={`${slug}`}>
          <h2>{title}</h2>
        </NavLink>
        <h5
          style={{
            marginTop: 0
          }}
        >
          {createdAtDateString}
        </h5>
      </Flex>
      <div
        style={{
          width: '168px',
          height: '168px',
          borderRadius: '8px',
          background: '#d3d3d3'
        }}
      >
        {/* TODO(roy): 이미지 넣기 */}
      </div>
    </Flex>
  )
}

export default Row
