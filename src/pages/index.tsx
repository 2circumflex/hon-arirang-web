/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import { NavLink } from 'theme-ui'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Result } from '../../gatsby-node'
import { ContentfulPost } from '../../types/graphql-types'

interface IndexProps {
  data: Result
}

const Index: React.FC<IndexProps> = props => {
  const { data } = props
  return (
    <Layout>
      <SEO title='Home' />
      <h1>최근 작성한 게시글 목록</h1>
      <ul>
        {data.allContentfulPost.nodes &&
          data.allContentfulPost.nodes.map((node: ContentfulPost, index: number) => (
            <li key={index}>
              <NavLink href={`${node.slug}`}>
                {node.title}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export default Index

export const pageQuery = graphql`
{
  allContentfulPost {
    nodes {
    title
      slug
      createdAt
      body {
        json
      }
    }
  }
}
`
