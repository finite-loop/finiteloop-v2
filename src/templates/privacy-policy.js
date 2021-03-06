import React from 'react'
import propTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/content'

export const PrivacyPageTemplate = ({
  props,
  content,
  contentComponent,
  privacyData,
}) => {
  const PageContent = contentComponent || Content
  return (
    <Layout>
      <Helmet
        title={
          props.data.global.frontmatter.siteTitle +
          ' | ' +
          privacyData.frontmatter.title
        }
      />
      <PageContent
        className="para-primary"
        content={privacyData.frontmatter.header}
      />
      <PageContent
        className="text-left text-white leading-normal tracking-normal sm:text-lg lg:px-12 sm:px-8 pt-4 two-column"
        content={content}
      />
      <PageContent
        className="para-primary"
        content={privacyData.frontmatter.footer}
      />
      <div className="mx-auto text-center pb-4">
        <Link to="/contact">
          <button role="button" className="rectButton">
            Talk to us
          </button>
        </Link>
      </div>
      <SEO
        postPath={privacyData.frontmatter.path}
        postNode={privacyData}
        postSEO
      />
    </Layout>
  )
}

const PrivacyPageTemplateWrapper = props => {
  const { edges: aboutus } = props.data.Privacy
  return (
    <div>
      {aboutus.map(({ node: aboutusData }) => (
        <PrivacyPageTemplate
          key={aboutusData.frontmatter.title}
          title={aboutusData.frontmatter.title}
          props={props}
          privacyData={aboutusData}
          content={aboutusData.html}
          contentComponent={HTMLContent}
        />
      ))}
    </div>
  )
}

PrivacyPageTemplate.propTypes = {
  props: propTypes.object.isRequired,
  data: propTypes.object,
  privacyData: propTypes.object.isRequired,
  content: propTypes.string.isRequired,
  contentComponent: propTypes.func.isRequired,
}

PrivacyPageTemplateWrapper.propTypes = {
  data: propTypes.object.isRequired,
}

export default PrivacyPageTemplateWrapper

export const privacyPageQuery = graphql`
  query PrivacyPage {
    Privacy: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "privacy-policy" } } }
    ) {
      edges {
        node {
          html
          id
          excerpt
          frontmatter {
            path
            title
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            header
            footer
          }
        }
      }
    }
    global: markdownRemark(
      frontmatter: { templateKey: { eq: "global-settings" } }
    ) {
      frontmatter {
        siteTitle
      }
    }
  }
`
