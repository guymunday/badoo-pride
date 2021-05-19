import SanitisedHtml from "../SanitisedHtml";
import styled from "styled-components";

const StyledWords = styled.div`
  font-family: "windsor";
  font-size: 2rem;
  text-align: center;
  padding: 120px 20px;
  font-weight: 700;
  line-height: 1.3;
  @media screen and (max-width: 768px) {
    font-size: 1.3rem;
  }
  .word-block-inner {
    max-width: 700px;
    margin: auto;
    img {
      display: block;
      max-width: 120px;
      margin: 0 auto 20px;
    }
  }
`;

export default function WordBlock({ data }) {
  return (
    <>
      <StyledWords>
        <div className="word-block-inner">
          <img src={data?.icon?.url} alt={data?.icon?.alt} />
          <SanitisedHtml html={data?.copy} center />
        </div>
      </StyledWords>
    </>
  );
}
