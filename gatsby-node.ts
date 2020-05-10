/* eslint-disable @typescript-eslint/no-explicit-any */
import { GatsbyNode } from 'gatsby'
import { resolve } from 'path'
import { ContentfulPostConnection, ContentfulPost } from './types/graphql-types'

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

  const Post = resolve(__dirname, './src/components/Post.tsx')

  const createPagesFromContentfulPosts = async (posts: ContentfulPost[]) => {
    for (const post of posts) {
      createPage<PostContext>({
        path: post.contentful_id,
        context: {
          post: post
        },
        component: Post
      })
    }
  }

  if (data !== undefined) {
    createPagesFromContentfulPosts(data.allContentfulPost.nodes)
  }
}
