import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";

import RichText from "../components/RichText";

import "./index.css";

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  console.log(data.datoCmsSite?.name);

  return (
    <main>
      <h1 className="title">Hello world</h1>
    </main>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    datoCmsSite {
      name
    }

    # an article can be fetched here using the 'datoCmsArticle' field.
    # Example to fetch an article by id: 'datoCmsArticle(id: {eq: "DatoCmsArticle-94823510"})'
  }
`;

export const Head: HeadFC = (data) => {
  return <title>Web Developer immersion day</title>;
};
