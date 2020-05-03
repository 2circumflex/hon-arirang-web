/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Post } from '../models'

interface DetailProps {
  pageContext: Post
}

const Detail: React.FC<DetailProps> = props => {
  const { pageContext } = props
  return (
    <Layout>
      <h2>{pageContext.title}</h2>
      <h5>{pageContext.createdAt}</h5>
      <div dangerouslySetInnerHTML={{ __html: documentToHtmlString(pageContext.body.json) }} />
    </Layout>
  )
}

export default Detail
