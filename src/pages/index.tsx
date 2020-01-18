import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import Email from '../components/Email';
import Hero from '../components/hero';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SocialLinks from '../components/SocialLinks';
import { Label, WorksListContainer } from '../components/StyledComps';
import WorkListItem from '../components/WorkListItem';
import { featured } from '../data/data';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Makoto Dejima | Design and Development"
      keywords={[
        `Makoto Dejima`,
        `JavaScript`,
        `Design`,
        `React`,
        `Front-End Developer`,
        `Graphic Design`,
      ]}
    />
    <Hero />
    <Label>
      Featured Work <Link to="/work/">Show More Works</Link>
    </Label>

    <WorksListContainer>
      {Object.keys(featured).map(id => {
        return (
          <WorkListItem
            key={featured[id].id}
            title={featured[id].title}
            client={featured[id].client}
            type={featured[id].type}
            keywords={featured[id].keywords}
            path={featured[id].path}
            url={featured[id].url}
          >
            {featured[id].isVideo ? (
              <video autoPlay loop muted playsInline>
                <source src={data[id].publicURL} type="video/mp4" />
              </video>
            ) : (
              <Img
                alt={featured[id].id}
                fluid={data[id].childImageSharp.fluid}
              />
            )}
          </WorkListItem>
        );
      })}
    </WorksListContainer>
    <div style={{ marginBottom: `4rem` }}>
      <h3 style={{ marginTop: 0 }}>Get in touch.</h3>
      <Email />
      <SocialLinks />
    </div>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    the_light_of_tokyo: file(relativePath: { eq: "the_light_of_tokyo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mera: file(relativePath: { eq: "mera.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    satte: file(relativePath: { eq: "satte.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    manhattan_portage: file(relativePath: { eq: "manhattan_portage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    robotex: file(relativePath: { eq: "robotex.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 300, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sobasquare: file(relativePath: { eq: "sobasquare.mp4" }) {
      publicURL
    }
    naotatsu_kaku: file(relativePath: { eq: "naotatsu_kaku.mp4" }) {
      publicURL
    }
  }
`;
