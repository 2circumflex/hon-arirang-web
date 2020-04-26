export const siteMetadata = {
  title: '혼아리랑',
  description: '직장인 쌍절곤 아티스트입니다',
  author: '혼아리랑',
}

export const plugins = [
  'gatsby-plugin-typescript',
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Gatsby + Node.js (TypeScript) API',
      short_name: 'Gatsby + Node.js (TypeScript)',
      start_url: '/',
      icon: 'src/images/gatsby-icon.png',
    },
  },
  'gatsby-plugin-theme-ui',
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: '3be69cyw8kvg',
      accessToken: '8-5pojgzB3lbjBbMaLPSfns_JePQMUQ98O8VksOZSSc',
    },
  },
]
