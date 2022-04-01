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
  src: "data:image/jpeg;base64,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",
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
  background-image: url("${(props) => props.src}");
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
