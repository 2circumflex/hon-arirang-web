/* eslint-disable @typescript-eslint/no-explicit-any */
import { GatsbyNode } from 'gatsby'
import { resolve } from 'path'
import { ContentfulPostConnection } from './types/graphql-types'

export type Result = {
  allContentfulPost: ContentfulPostConnection
}

const query = `
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

export const createPages: GatsbyNode['createPages'] = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data, errors } = await graphql<Result>(query)

  if (errors) {
    throw errors
  }

  const Detail = resolve(__dirname, './src/components/Detail.tsx')

  if (data !== undefined) {
    data.allContentfulPost.nodes.forEach(node => {
      createPage({
        path: node.contentful_id,
        context: { post: node },
        component: Detail
      })
    })
  }
}
