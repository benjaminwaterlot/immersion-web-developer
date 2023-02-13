import { graphql } from "gatsby";

export const fragments = graphql`
  # This fragment represents the fields you need to fetch in a BlockEmoji
  # to render a corresponding React component.
  # It is used in the RichText fragment below.
  fragment BlockEmoji on DatoCmsBlockquoteemoji {
    id: originalId
    emoji
    content {
      value
    }
  }

  # This fragment represents the fields you need to fetch in an article to
  # render an article's body, using the RichText React component.
  fragment RichText on DatoCmsDatoCmsArticleBodyStructuredText {
    value
    blocks {
      __typename
      ...BlockEmoji
    }
  }
`;
