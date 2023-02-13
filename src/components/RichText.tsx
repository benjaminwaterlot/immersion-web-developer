import React, { FC } from "react";
import {
  StructuredText as DatoStructuredText,
  StructuredTextPropTypes,
} from "react-datocms";

type RichTextProps = Omit<StructuredTextPropTypes<any, any>, "data"> & {
  data: {
    value: Record<string, unknown> | null;
    blocks: unknown;
  } | null;
};

const RichText: FC<RichTextProps> = ({
  data,
  customNodeRules = [],
  ...props
}) => (
  <DatoStructuredText
    customNodeRules={customNodeRules}
    data={data as any}
    {...props}
    renderBlock={props.renderBlock ?? (() => null)}
    // renderInlineRecord={renderInlineRecord}
    // renderLinkToRecord={renderLinkToRecord}
    // renderText={renderText}
  />
);

export default RichText;
