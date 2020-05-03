/* eslint-disable @typescript-eslint/no-explicit-any */
import { GatsbyNode } from 'gatsby'
import { resolve } from 'path'
import { ContentfulPost, ContentfulPostConnection } from './types/graphql-types'

export type Result = {
  allContentfulPost: ContentfulPostConnection
}

export type PostContext = {
  post: ContentfulPost
}

const query = `
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

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data, errors } = await graphql<Result>(query)

  if (errors) {
    throw errors
  }

  const detailComponent = resolve(__dirname, './src/components/detail.tsx')

  if (data !== undefined) {
    data.allContentfulPost.nodes.forEach(node => {
      createPage<PostContext>({
        path: `/${node.slug}`,
        context: { post: node },
        component: detailComponent
      })
    })
  }
}
