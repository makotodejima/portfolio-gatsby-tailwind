import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../../components/layout";
import HomeWorkBtns from "../../components/homeWorkBtns";

import SEO from "../../components/seo";

function TheLightOfTokyo() {
  return (
    <StaticQuery
      query={query}
      render={data => (
        <Layout>
          <SEO
            title="The Light of Tokyo"
            keywords={[
              `Makoto Dejima`,
              `Designer`,
              `Front-End Developer`,
              `Design`,
              `Graphic Design`,
              `JavaScript`,
              `React`,
              `Motion`
            ]}
          />

          <div className="hero flex flex-col justify-center text-center align-middle">
            <h3 className="font-light tracking-wide">
              Tokyo Postcard Award 2019 by Hotel Ryumeikan
            </h3>
            <h2 className="font-light my-4">The Light of Tokyo</h2>
          </div>

          <div className="work flex flex-col">
            <Img
              fluid={data.tpc01.childImageSharp.fluid}
              alt="The Light of Tokyo - 01"
              className="my-16"
            />
            <Img
              fluid={data.tpc02.childImageSharp.fluid}
              alt="The Light of Tokyo - 02"
              className="my-16"
            />
            <Img
              fluid={data.tpc03.childImageSharp.fluid}
              alt="The Light of Tokyo - 03"
              className="my-16"
            />
            <Img
              fluid={data.tpc04.childImageSharp.fluid}
              alt="The Light of Tokyo - 04"
              className="my-16"
            />
            <Img
              fluid={data.tpc05.childImageSharp.fluid}
              alt="The Light of Tokyo - 05"
              className="my-16"
            />
          </div>
          <HomeWorkBtns />
        </Layout>
      )}
    />
  );
}

export default TheLightOfTokyo;

const query = graphql`
  query {
    tpc01: file(relativePath: { eq: "tpc01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tpc02: file(relativePath: { eq: "tpc02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tpc03: file(relativePath: { eq: "tpc03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tpc04: file(relativePath: { eq: "tpc04.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tpc05: file(relativePath: { eq: "tpc05.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
