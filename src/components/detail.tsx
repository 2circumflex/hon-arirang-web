/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { PostContext } from '../../gatsby-node'

import Layout from './Layout'
// import SEO from '../components/SEO'

interface DetailProps {
  pageContext: PostContext
}

const Detail: React.FC<DetailProps> = props => {
  const { pageContext } = props
  return (
    <Layout>
      <h2>{`${pageContext.post.title}`}</h2>
      <h5>{pageContext.post.createdAt ?? ''}</h5>
      <div
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(pageContext.post.body?.json ?? '')
        }}
      />
    </Layout>
  )
}

export default Detail
