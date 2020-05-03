/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import { NavLink } from 'theme-ui'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import { Post } from '../models'

const Index: React.FC = ({ data }) => {
  console.log('찍어보자궁', data)
  return (
    <Layout>
      <SEO title='Home' />
      <h1>최근 작성한 게시글 목록</h1>
      <ul>
        {data.allContentfulPost.nodes &&
          data.allContentfulPost.nodes.map((post: Post, index: number) => (
            <li key={index}>
              <NavLink href={`${post.slug}`}>
                {post.title}
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
  query {
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
