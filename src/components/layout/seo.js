import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ title, description, image, meta, lang }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const defaultTitle = site.siteMetadata?.title
  const metaDescription = description || site.siteMetadata.description

  // ? Can be improved?
  const previewTitle = defaultTitle
    ? title !== `Home`
      ? `${title} | ${defaultTitle}`
      : defaultTitle
    : title
  const previewImage = `..${image}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: previewTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: previewImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:title`,
          content: previewTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: previewImage,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || `@sergiuwaxmann`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  description: ``,
  image: `/images/preview/home.png`,
  meta: [],
  lang: `en`,
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  lang: PropTypes.string,
}

export default SEO
