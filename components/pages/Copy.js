import styled from "styled-components";
import SanitisedHtml from "../SanitisedHtml";

const CopyStyles = styled.div`
  max-width: 720px;
  margin: 100px auto;
  padding: 0 30px;
`;

export default function Copy({ copy }) {
  return (
    <>
      <CopyStyles>
        <SanitisedHtml html={copy} />
      </CopyStyles>
    </>
  );
}
