# gatsby-plugin-cusdis
A plugin for adding [Cusdis](https://cusdis.com) comments to your [Gatsby](https://www.gatsbyjs.org/) website

## Install
```sh
$ yarn add gatsby-plugin-cusdis
```
or
```sh
$ npm install -S gatsby-plugin-cusdis
```

## Configure

Add the plugin to your `gatsby-config.js` file with your Cusdis appId and host

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-cusdis`,
      options: {
        appId: `your-cusdis-app-id`,
        host: `your-cusdis-host`, // not required, default https://cusdis.com
      }
    },
  ]
}
```

## Usage

You can use the plugin as shown in this brief example:

```jsx
import Cusdis from 'gatsby-plugin-cusdis'

const PostTemplate = () => {
  const cusdisAttrs = {
    pageId: post.id,
    pageUrl: `${config.siteUrl+location.pathname}`,
    pageTitle: post.title,
  }
  return (
    <>
      <h1>{post.title}</h1>
      <Cusdis attrs={cusdisAttrs} />
    </>
  )
}

export default PostTemplate
```

