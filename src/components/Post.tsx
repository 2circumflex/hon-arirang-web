/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Flex } from 'theme-ui'

import { DetailContext } from '../../gatsby-node'
import Layout from './Layout'
// import SEO from '../components/SEO'

interface PostProps {
  pageContext: DetailContext
}

const Post: React.FC<PostProps> = props => {
  const { pageContext } = props
  return (
    <Layout>
      <Flex
        sx={{
          flexDirection: 'column'
        }}
      >
        <h2>{`${pageContext.post.title}`}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(pageContext.post.body?.json ?? '')
          }}
        />
      </Flex>
    </Layout>
  )
}

export default Post
