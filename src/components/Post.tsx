/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { documentToHtmlString, Options } from '@contentful/rich-text-html-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { Flex } from 'theme-ui'

import { getHTML } from '../utils/transformers'
import { embedPrefix } from '../utils/const'
import { PostContext } from '../../gatsby-node'
import Layout from './Layout'
// import SEO from '../components/SEO'

const options: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, next) => {
      if (node.content.length > 0 && node.content[0].nodeType === 'text') {
        const embedPrefixUrlString = node.content[0].value
        if (embedPrefixUrlString.includes(embedPrefix)) {
          const urlString = embedPrefixUrlString.replace(embedPrefix, '')
          return getHTML(urlString)
        }
      }
      return `<p>${next(node.content)}</p>`
    }
  }
}

interface PostProps {
  pageContext: PostContext
}

const Post: React.FC<PostProps> = props => {
  const { pageContext } = props

  return (
    <Layout>
      <Flex
        sx={{
          flex: 1,
          flexDirection: 'column'
        }}
      >
        <h2>{`${pageContext.post.title}`}</h2>
        <div
          dangerouslySetInnerHTML={{
            __html: documentToHtmlString(pageContext.post.body?.json ?? '', options)
          }}
        />
      </Flex>
    </Layout>
  )
}

export default Post
