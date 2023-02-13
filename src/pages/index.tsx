import * as React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";

import RichText from "../components/RichText";

import "./index.css";

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  console.log(data.datoCmsSite?.name);

  const options: any = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const LocaleDate: any = data.datoCmsArticle?.date;
  const LocaleDateString = new Date(LocaleDate).toLocaleDateString(
    "fr",
    options
  );

  return (
    <main>
      <div className="header">
        <h1 className="title">{data.datoCmsSite?.name}</h1>
      </div>
      <div className="mainTitle">
        <h2 className="PostTitle">{data.datoCmsArticle?.title}</h2>
        <span className="publishedDate">publié le {LocaleDateString}</span>
      </div>
      <div className="content"></div>
    </main>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPage {
    datoCmsSite {
      name
    }

    datoCmsArticle(slug: { eq: "creation-previsionnel-tresorerie" }) {
      title
      date
      body {
        ...RichText
      }
    }

    # an article can be fetched here using the 'datoCmsArticle' field.
    # Example to fetch an article by id: 'datoCmsArticle(id: {eq: "DatoCmsArticle-94823510"})'
  }
`;

export const Head: HeadFC = (data) => {
  return <title>Web Developer immersion day</title>;
};
