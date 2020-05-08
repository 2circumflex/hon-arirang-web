/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import { Flex } from 'theme-ui'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Result } from '../../gatsby-node'
import { ContentfulPost } from '../../types/graphql-types'
import Row from '../components/Row'

interface IndexProps {
  data: Result
}

const Index: React.FC<IndexProps> = props => {
  const { data } = props

  return (
    <Layout>
      <SEO title='Home' />
      <Flex
        sx={{
          flex: 1,
          flexDirection: 'column'
        }}
      >
        {data.allContentfulPost.nodes &&
          data.allContentfulPost.nodes.map((node: ContentfulPost, index: number) => (
            <React.Fragment key={index}>
              <Row contentfulPost={node} />
              {index !== (data.allContentfulPost.nodes.length - 1) &&
                <div style={{ height: '80px' }} />
              }
            </React.Fragment>
          ))
        }
      </Flex>
    </Layout>
  )
}

export default Index

export const query = graphql`
{
  allContentfulPost {
    nodes {
      contentful_id
      title
      createdAt
      body {
        json
      }
    }
  }
}
`
