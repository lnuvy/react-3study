import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { shape, src, size } = props;

  const styles = {
    src,
    size,
  };

  if (shape === "circle") {
    return <ImageCircle {...styles} />;
  }

  if (shape === "rectangle") {
    return (
      <AspectOutter>
        <AspectInner {...styles} />
      </AspectOutter>
    );
  }

  return null;
};

Image.defaultProps = {
  shape: "rectangle",
  src: "data:image/png;base64,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",
  size: 36,
};

const AspectOutter = styled.div`
  width: 100%;
  min-width: 250px;
`;

const AspectInner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src});
  background-size: cover;
`;

const ImageCircle = styled.div`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: var(--size);

  background-image: url("${(props) => props.src}");
  background-size: cover;
  margin: 4px;
`;

export default Image;
