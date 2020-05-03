/* eslint-disable @typescript-eslint/no-explicit-any */
import { GatsbyNode } from 'gatsby'
import { resolve } from 'path'

import { Post } from './src/models'

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data, errors } = await graphql<any>(`
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
  `)

  if (errors) {
    throw errors
  }

  data.allContentfulPost.nodes.forEach((post: Post) => {
    createPage({
      path: `/${post.slug}`,
      context: post,
      component: resolve(__dirname, './src/pages/detail.tsx')
    })
  })
}
